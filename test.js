const merge = require('lodash/merge');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const customPlugin = require('./index.js');

expect.extend({
  toMatchCss: cssMatcher,
});

function generatePluginCss(overrides) {
  const config = {
    theme: {
      spacing: {
        3: '0.75rem',
        6: '1.5rem',
        8: '2rem',
      },
      borderRadius: {
        lg: '0.5rem',
        xl: '0.75rem',
      },
      fontWeight: {
        bold: '700',
      },
      colors: {
        white: '#ffffff',
      },
    },
    corePlugins: false,
    plugins: [customPlugin],
  };

  return postcss(tailwindcss(merge(config, overrides)))
    .process('@tailwind utilities; @tailwind components', {
      from: undefined,
    })
    .then(({ css }) => css);
}

test('animation utilities are generated', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`
      @keyframes bounce-gentle {
        0%, 100% {
          transform: translateY(0)
        }
        50% {
          transform: translateY(-5px)
        }
      }
      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(59, 130, 246, 0.5)
        }
        50% {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8)
        }
      }
      @keyframes rotate-slow {
        0% {
          transform: rotate(0deg)
        }
        100% {
          transform: rotate(360deg)
        }
      }
      @keyframes gradient-shift {
        0% {
          background-position: 0% 50%
        }
        50% {
          background-position: 100% 50%
        }
        100% {
          background-position: 0% 50%
        }
      }
      .animate-bounce-gentle {
        animation: bounce-gentle 0.5s ease-in-out infinite
      }
      .animate-pulse-glow {
        animation: pulse-glow 5s ease-in-out infinite
      }
      .animate-rotate-slow {
        animation: rotate-slow 2s linear infinite
      }
      .glass-card {
        background: rgba(200,70,205, 0.5);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37)
      }
      .gradient-text {
        background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ef4444);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 200%;
        animation: gradient-shift 3s ease infinite
      }
      .btn-magical {
        position: relative;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 700;
        color: #ffffff;
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        border: none;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.3s ease
      }
      .btn-magical:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2)
      }
      .btn-magical:active {
        transform: translateY(0)
      }
      .btn-magical::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s
      }
      .btn-magical:hover::before {
        left: 100%
      }
      .logo-container {
        position: relative;
        display: inline-block
      }
      .logo-container:hover .logo {
        transform: scale(1.1)
      }
      .floating-card {
        background: #ffffff;
        border-radius: 0.75rem;
        padding: 2rem;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease
      }
      .floating-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15)
      }
    `);
  });
});

test('glass card utility works correctly', () => {
  return generatePluginCss().then(css => {
    expect(css).toContain('.glass-card');
    expect(css).toContain('backdrop-filter: blur(10px)');
    expect(css).toContain('rgba(200,70,205, 0.5)');
  });
});

test('gradient text utility works correctly', () => {
  return generatePluginCss().then(css => {
    expect(css).toContain('.gradient-text');
    expect(css).toContain('linear-gradient(45deg, #3b82f6, #8b5cf6, #ef4444)');
    expect(css).toContain('-webkit-background-clip: text');
  });
});

test('magical button component works correctly', () => {
  return generatePluginCss().then(css => {
    expect(css).toContain('.btn-magical');
    expect(css).toContain('linear-gradient(45deg, #3b82f6, #8b5cf6)');
    expect(css).toContain('transform: translateY(-2px)');
  });
});

test('animations are properly defined', () => {
  return generatePluginCss().then(css => {
    expect(css).toContain('@keyframes bounce-gentle');
    expect(css).toContain('@keyframes pulse-glow');
    expect(css).toContain('@keyframes rotate-slow');
    expect(css).toContain('@keyframes gradient-shift');
  });
});