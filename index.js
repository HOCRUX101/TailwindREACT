import plugin from 'tailwindcss/plugin'

export default plugin(function({ addUtilities, addComponents, theme }) {
  
  // Add custom utilities (including keyframes inline)
  addUtilities({
    // Animations with inline keyframes
    '@keyframes bounce-gentle': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-5px)' },
    },
    '@keyframes pulse-glow': {
      '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
      '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
    },
    '@keyframes rotate-slow': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    '@keyframes gradient-shift': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },

    // Animation classes
    '.animate-bounce-gentle': {
      animation: 'bounce-gentle 0.5s ease-in-out infinite',
    },
    '.animate-pulse-glow': {
      animation: 'pulse-glow 5s ease-in-out infinite',
    },
    '.animate-rotate-slow': {
      animation: 'rotate-slow 2s linear infinite',
    },

    // Glass card effect
    '.glass-card': {
      background: 'rgba(200,70,205, 0.5)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    },

    // Gradient text
    '.gradient-text': {
      background: 'linear-gradient(0.25turn,#1f5e7a,#a0b096,#b55e1e)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: '200% 200%',
      animation: 'gradient-shift 3s ease infinite',
    }
  })

  // Add custom components
  addComponents({
    '.btn-magical': {
      position: 'relative',
      padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
      borderRadius: theme('borderRadius.lg'),
      fontWeight: theme('fontWeight.bold'),
      color: theme('colors.white'),
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      border: 'none',
      cursor: 'pointer',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      },
      '&:active': {
        transform: 'translateY(0)',
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
        transition: 'left 0.5s',
      },
      '&:hover::before': {
        left: '100%',
      }
    },

    '.logo-container': {
      position: 'relative',
      display: 'inline-block',
      '&:hover .logo': {
        transform: 'scale(1.1)',
      }
    },

    '.floating-card': {
      background: theme('colors.white'),
      borderRadius: theme('borderRadius.xl'),
      padding: theme('spacing.8'),
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)',
      }
    }
  })
})