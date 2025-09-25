# Tic-Tac-Toe Game

A modern, responsive tic-tac-toe web game built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, win detection with visual highlighting, score tracking, and mobile-responsive design.

![Tic-Tac-Toe Game](https://img.shields.io/badge/Game-Tic--Tac--Toe-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)

## Features

- ✨ **Two-player local gameplay** - X and O alternating turns
- 🎯 **Win detection** - Automatic detection of all 8 winning combinations
- 🌟 **Visual win highlighting** - Winning line animation and highlighting
- 📊 **Score tracking** - Persistent score tracking during session
- 📱 **Mobile responsive** - Optimized for mobile devices
- ⚡ **Smooth animations** - Hover effects and transitions
- ♿ **Keyboard accessible** - Full keyboard navigation support
- 🎨 **Modern design** - Clean UI with Tailwind CSS styling

## Live Demo

The game is deployed and ready to play:
- **GitHub Pages**: `https://[your-username].github.io/tic-tac-toe`
- **Vercel**: Deploy with one click using Vercel

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/[your-username]/tic-tac-toe.git
cd tic-tac-toe
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000) to play the game!

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main game page
│   ├── globals.css         # Global styles and Tailwind imports
│   └── favicon.ico         # Game favicon
├── components/
│   ├── game/
│   │   ├── Board.tsx       # Game board component
│   │   ├── Square.tsx      # Individual square component
│   │   ├── GameStatus.tsx  # Current player/winner display
│   │   └── ScoreBoard.tsx  # Score tracking display
│   └── ui/
│       └── Button.tsx      # Reusable button component
├── lib/
│   └── gameLogic.ts        # Win detection and game logic
├── types/
│   └── game.ts             # TypeScript type definitions
└── hooks/
    └── useGame.ts          # Custom hook for game state
```

### Key Components

#### useGame Hook
Custom hook that manages all game state including:
- Board state and current player
- Win detection and scoring
- Game reset functionality

#### Game Logic
Pure functions for game mechanics:
- `checkWinner()` - Detects winning combinations
- `checkDraw()` - Determines draw conditions
- `initializeBoard()` - Creates empty game board

## Deployment

### Deploy to GitHub Pages

1. **Configure repository**
```bash
# Update basePath in next.config.js to match your repo name
# The basePath is currently set to '/tic-tac-toe'
```

2. **Deploy**
```bash
npm run deploy
```

3. **Enable GitHub Pages**
- Go to repository Settings → Pages
- Set Source to "gh-pages" branch

### Deploy to Vercel

1. **One-click deploy**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/[your-username]/tic-tac-toe)

2. **Or use CLI**
```bash
npm install -g vercel
vercel --prod
```

## How to Play

1. **Start Game**: Players X and O take turns clicking empty squares
2. **Win Condition**: Get three of your symbols in a row (horizontal, vertical, or diagonal)
3. **Score Tracking**: Wins and draws are tracked throughout the session
4. **Reset**: Use "Play Again" to start a new round or "New Game" to reset scores

### Keyboard Navigation

- Use **Tab** to navigate between squares and buttons
- Use **Space** or **Enter** to select a square or button
- Fully accessible for screen readers

## Technical Details

### Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Hooks** - Modern React state management

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features

- Static site generation (SSG)
- Optimized fonts with Next.js font optimization
- Minimal JavaScript bundle
- CSS purging for production builds

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Use ESLint and format with Prettier
- Write meaningful commit messages
- Add tests for new features

## Troubleshooting

### Common Issues

**Build fails with Tailwind CSS errors:**
```bash
npm install @tailwindcss/postcss --save-dev
```

**Font loading warnings:**
- Ensure you're using `next/font/google` import

**GitHub Pages 404 errors:**
- Check that `basePath` in `next.config.js` matches your repository name
- Ensure `.nojekyll` file exists in the `public/` folder

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by the classic tic-tac-toe game
- Built following React and Next.js best practices
- Styled with modern design principles

---

**Ready to play?** Start the development server and enjoy the game! 🎮