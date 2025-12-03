# PI Hub

A clean, modern application hub for Premier Ikon applications. Built with Vite, React, and TypeScript.

## Features

- 🎨 Modern, Apple-inspired design with light theme
- 📱 Responsive layout that works on all devices
- ⚡ Fast and lightweight with Vite
- 🔗 Easy to add new applications

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Adding New Applications

To add a new application, simply edit `src/App.tsx` and add a new entry to the `applications` array:

```typescript
{
  id: 'your-app-id',
  name: 'Your App Name',
  description: 'Description of your application',
  url: 'https://your-app-url.com',
  icon: 'optional-icon-url.png', // Optional
}
```

## Project Structure

```
PI-HUB/
├── src/
│   ├── components/
│   │   └── AppCard.tsx      # Application card component
│   ├── App.tsx              # Main application component
│   ├── App.css              # Application styles
│   ├── index.css            # Global styles
│   ├── main.tsx             # Application entry point
│   └── vite-env.d.ts       # TypeScript definitions
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Technologies

- **Vite** - Next generation frontend tooling
- **React** - UI library
- **TypeScript** - Type safety
- **CSS3** - Modern styling with CSS variables

