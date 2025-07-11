# tlwdreact

> A beautiful Tailwind CSS plugin to make React website building less tough and more magical ✨

This plugin adds stunning animations, glass morphism effects, gradient utilities, and interactive components to supercharge your React + Tailwind CSS projects.

## Installation

Install the plugin from npm:

```bash
npm install tlwdreact
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tlwdreact'),
  ],
};
```

## Features

### 🎨 Animation Utilities

- **`.animate-bounce-gentle`** - A subtle bouncing animation
- **`.animate-pulse-glow`** - A glowing pulse effect with blue shadows
- **`.animate-rotate-slow`** - Slow 360° rotation animation

### ✨ Visual Effects

- **`.glass-card`** - Beautiful glassmorphism effect with backdrop blur
- **`.gradient-text`** - Animated gradient text that shifts colors
- **`.floating-card`** - Elevated card with hover animations

### 🎯 Interactive Components

- **`.btn-magical`** - Gorgeous gradient button with hover effects and shine animation
- **`.logo-container`** - Container that scales logos on hover

## Usage Examples

### Basic Animation Classes

```jsx
// Gentle bouncing element
<div className="animate-bounce-gentle">
  Bouncing content
</div>

// Glowing button
<button className="animate-pulse-glow bg-blue-500 text-white px-4 py-2 rounded">
  Glowing Button
</button>

// Rotating icon
<div className="animate-rotate-slow">
  🔄
</div>
```

### Glass Morphism Effect

```jsx
<div className="glass-card rounded-lg p-6">
  <h2 className="text-white text-xl font-bold">Glass Card</h2>
  <p className="text-white/80">Beautiful glassmorphism effect</p>
</div>
```

### Gradient Text

```jsx
<h1 className="gradient-text text-4xl font-bold">
  Amazing Gradient Text
</h1>
```

### Magical Button

```jsx
<button className="btn-magical">
  Click Me!
</button>
```

### Floating Cards

```jsx
<div className="floating-card">
  <h3 className="text-xl font-semibold mb-2">Feature Card</h3>
  <p className="text-gray-600">This card floats up on hover</p>
</div>
```

### Logo with Hover Effect

```jsx
<div className="logo-container">
  <img src="logo.png" alt="Logo" className="logo w-16 h-16" />
</div>
```

## Generated CSS

This plugin generates the following CSS utilities and components:

### Keyframe Animations
- `@keyframes bounce-gentle` - Subtle vertical bounce
- `@keyframes pulse-glow` - Blue glow pulsing effect  
- `@keyframes rotate-slow` - 360° rotation in 2 seconds
- `@keyframes gradient-shift` - Background position animation for gradients

### Utility Classes
- `.animate-bounce-gentle` - Apply gentle bounce animation
- `.animate-pulse-glow` - Apply glow pulse animation
- `.animate-rotate-slow` - Apply slow rotation animation
- `.glass-card` - Glassmorphism effect with backdrop blur
- `.gradient-text` - Animated gradient text effect

### Component Classes
- `.btn-magical` - Interactive gradient button with shine effect
- `.logo-container` - Container for logo hover effects
- `.floating-card` - Elevated card with hover animations

## Browser Support

This plugin uses modern CSS features including:
- `backdrop-filter` (for glass effects)
- CSS Gradients
- CSS Animations
- `background-clip: text` (for gradient text)

Make sure your target browsers support these features, or provide appropriate fallbacks.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

tlwdreact is licensed under the MIT License.

## Credits

Created to make React + Tailwind development more magical and less repetitive.