name: "Modern Tic-Tac-Toe Web Game with Next.js 14"
description: |

## Purpose
Build a production-ready, modern tic-tac-toe web game using Next.js 14, TypeScript, and Tailwind CSS with animations, score tracking, and deployment to GitHub Pages/Vercel.

## Core Principles
1. **Context is King**: Include ALL necessary documentation, examples, and caveats
2. **Validation Loops**: Provide executable tests/lints the AI can run and fix
3. **Information Dense**: Use keywords and patterns from the codebase
4. **Progressive Success**: Start simple, validate, then enhance
5. **Global rules**: Be sure to follow all rules in CLAUDE.md

---

## Goal
Build a modern, responsive tic-tac-toe web game for two players to play on the same device. The game should feature clean UI with animations, win detection with visual highlighting, score tracking, and be deployable to GitHub Pages or Vercel.

## Why
- **Learning value**: Fundamental React patterns and hooks implementation
- **User engagement**: Interactive game with smooth animations and visual feedback
- **Deployment practice**: Static site deployment to GitHub Pages/Vercel
- **Accessibility**: Inclusive gameplay with keyboard navigation

## What
Interactive web-based tic-tac-toe game with:
- Two-player local gameplay (X and O alternating turns)
- Visual win detection with highlighting
- Score persistence during session
- Smooth animations and hover effects
- Mobile-responsive design
- Keyboard accessible gameplay

### Success Criteria
- [ ] Game board renders with 3x3 grid
- [ ] Players can alternate turns (X and O)
- [ ] Win detection works for all 8 winning combinations
- [ ] Winning line is visually highlighted
- [ ] Score tracking persists during session
- [ ] Game can be reset while preserving scores
- [ ] Responsive on mobile devices
- [ ] Deployable to GitHub Pages with proper configuration
- [ ] All TypeScript types properly defined
- [ ] No linting or type errors

## All Needed Context

### Documentation & References
```yaml
# MUST READ - Include these in your context window
- url: https://nextjs.org/docs/app/getting-started/project-structure
  why: Next.js 14 App Router structure and conventions

- url: https://nextjs.org/docs/app/getting-started/installation
  why: Project setup with create-next-app and TypeScript

- url: https://react.dev/learn/tutorial-tic-tac-toe
  why: Official React tutorial for tic-tac-toe patterns

- url: https://tailwindcss.com/docs/animation
  why: Animation classes for hover states and transitions

- url: https://medium.com/@ademyalcin27/building-a-stylish-tic-tac-toe-game-with-react-typescript-and-tailwind-css-f95cf06983e1
  why: TypeScript types and Tailwind styling patterns for tic-tac-toe

- url: https://github.com/gregrickaby/nextjs-github-pages
  why: GitHub Pages deployment configuration for Next.js

- url: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  why: Static export configuration for GitHub Pages

- url: https://claritydev.net/blog/tic-tac-toe-typescript-react-hooks
  why: TypeScript implementation with React hooks patterns

- url: https://wallis.dev/blog/next-js-basepath-and-assetprefix
  why: Critical basePath configuration for GitHub Pages deployment
```

### Current Codebase tree
```bash
.
├── .claude/
├── .git/
├── .gitignore
├── CLAUDE.md
├── INITIAL.md
└── PRPs/
    ├── EXAMPLE_multi_agent_prp.md
    └── templates/
        └── prp_base.md
```

### Desired Codebase tree with files to be added
```bash
.
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main game page
│   │   ├── globals.css         # Global styles and Tailwind imports
│   │   └── favicon.ico         # Game favicon
│   ├── components/
│   │   ├── game/
│   │   │   ├── Board.tsx       # Game board component
│   │   │   ├── Square.tsx      # Individual square component
│   │   │   ├── GameStatus.tsx  # Current player/winner display
│   │   │   └── ScoreBoard.tsx  # Score tracking display
│   │   └── ui/
│   │       └── Button.tsx      # Reusable button component
│   ├── lib/
│   │   └── gameLogic.ts        # Win detection and game logic
│   ├── types/
│   │   └── game.ts             # TypeScript type definitions
│   └── hooks/
│       └── useGame.ts          # Custom hook for game state
├── public/
│   └── .nojekyll               # Disable Jekyll for GitHub Pages
├── package.json
├── tsconfig.json
├── next.config.js              # Static export configuration
├── tailwind.config.ts
├── postcss.config.js
├── .eslintrc.json
└── README.md                   # Setup and deployment instructions
```

### Known Gotchas & Library Quirks
```yaml
# CRITICAL: Next.js static export limitations
- No Image component optimization: use unoptimized: true
- No dynamic routes or server components
- Must use output: "export" in next.config.js

# GitHub Pages deployment
- Must set basePath to repository name
- Include .nojekyll file in public folder
- Use gh-pages package for deployment

# TypeScript strict mode
- All props must be typed
- Event handlers need explicit types
- Use const assertions for arrays

# Tailwind CSS purging
- Dynamic classes won't work (use full class names)
- Include all used classes in safelist if needed

# React 18 strict mode
- Effects run twice in development
- Use cleanup functions in useEffect
```

## Implementation Blueprint

### Data models and structure

```typescript
// types/game.ts
export type Player = 'X' | 'O' | null;
export type BoardState = Player[];

export interface GameState {
  board: BoardState;
  currentPlayer: Player;
  winner: Player;
  isDraw: boolean;
  winningLine: number[] | null;
}

export interface ScoreState {
  X: number;
  O: number;
  draws: number;
}

export const WINNING_COMBINATIONS = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal
  [2, 4, 6]  // Anti-diagonal
] as const;
```

### List of tasks to complete in order

```yaml
Task 1: Initialize Next.js project with TypeScript and Tailwind
  - Run: npx create-next-app@latest tic-tac-toe --typescript --tailwind --app
  - Configure next.config.js for static export
  - Add .nojekyll to public folder
  - Update tailwind.config.ts with game-specific animations

Task 2: Create TypeScript type definitions
CREATE src/types/game.ts:
  - Define Player, BoardState, GameState types
  - Define ScoreState interface
  - Export WINNING_COMBINATIONS constant array

Task 3: Implement game logic utilities
CREATE src/lib/gameLogic.ts:
  - checkWinner function: iterate through WINNING_COMBINATIONS
  - checkDraw function: check if all squares filled
  - initializeBoard function: create empty 9-square array
  - Ensure pure functions with no side effects

Task 4: Create custom game hook
CREATE src/hooks/useGame.ts:
  - useState for board, currentPlayer, winner, scores
  - handleSquareClick function with turn logic
  - resetGame function preserving scores
  - newGame function resetting everything
  - useEffect for win detection after moves

Task 5: Build Square component
CREATE src/components/game/Square.tsx:
  - Accept value, onClick, isWinningSquare props
  - Tailwind classes for hover states and animations
  - Conditional styling for winning squares
  - Accessibility: button with aria-label

Task 6: Build Board component
CREATE src/components/game/Board.tsx:
  - Render 3x3 grid using CSS Grid
  - Map through board state rendering Squares
  - Pass winning line info to highlight squares
  - Add smooth transition animations

Task 7: Create GameStatus component
CREATE src/components/game/GameStatus.tsx:
  - Display current player turn
  - Show winner announcement
  - Show draw message
  - Include victory animation classes

Task 8: Create ScoreBoard component
CREATE src/components/game/ScoreBoard.tsx:
  - Display X wins, O wins, draws
  - Style with Tailwind cards
  - Add score increment animations

Task 9: Create reusable Button component
CREATE src/components/ui/Button.tsx:
  - Accept variant prop (primary/secondary)
  - Tailwind hover and focus states
  - TypeScript prop types

Task 10: Implement main game page
MODIFY src/app/page.tsx:
  - Import and compose all components
  - Use useGame hook for state management
  - Responsive layout with Tailwind
  - Add meta tags for SEO

Task 11: Configure global styles
MODIFY src/app/globals.css:
  - Keep Tailwind directives
  - Add custom animations if needed
  - Set base font and colors

Task 12: Update layout with metadata
MODIFY src/app/layout.tsx:
  - Set title and description metadata
  - Configure viewport for mobile
  - Add favicon reference

Task 13: Configure deployment
MODIFY next.config.js:
  - Set output: "export"
  - Configure basePath for GitHub Pages
  - Set images.unoptimized: true
UPDATE package.json:
  - Add deploy scripts for gh-pages
  - Add predeploy build script

Task 14: Add tests for game logic
CREATE src/lib/gameLogic.test.ts:
  - Test all winning combinations
  - Test draw detection
  - Test board initialization
  - Use Jest or Vitest

Task 15: Create comprehensive README
CREATE README.md:
  - Installation instructions
  - Local development steps
  - Deployment guide for GitHub Pages
  - Deployment guide for Vercel
```

### Per task pseudocode

```typescript
// Task 4: useGame hook pseudocode
function useGame() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X')
  const [winner, setWinner] = useState<Player>(null)
  const [winningLine, setWinningLine] = useState<number[] | null>(null)
  const [scores, setScores] = useState<ScoreState>({ X: 0, O: 0, draws: 0 })

  // Handle square click
  const handleSquareClick = (index: number) => {
    // VALIDATION: Check if square empty and no winner
    if (board[index] || winner) return

    // UPDATE: Create new board with move
    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)

    // CHECK: Win condition using gameLogic
    const { winner, line } = checkWinner(newBoard)
    if (winner) {
      setWinner(winner)
      setWinningLine(line)
      // UPDATE: Scores with animation delay
      setTimeout(() => {
        setScores(prev => ({ ...prev, [winner]: prev[winner] + 1 }))
      }, 500)
    } else if (checkDraw(newBoard)) {
      setScores(prev => ({ ...prev, draws: prev.draws + 1 }))
    } else {
      // SWITCH: Player turn
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  return { board, currentPlayer, winner, winningLine, scores, handleSquareClick, resetGame, newGame }
}

// Task 3: Game logic pseudocode
function checkWinner(board: BoardState): { winner: Player, line: number[] | null } {
  // ITERATE: Through all winning combinations
  for (const combo of WINNING_COMBINATIONS) {
    const [a, b, c] = combo
    // CHECK: If all three squares match and not null
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: combo }
    }
  }
  return { winner: null, line: null }
}
```

### Integration Points
```yaml
STYLING:
  - tailwind.config.ts: Add custom animation keyframes
    animations: {
      'winner-pulse': 'pulse 1s ease-in-out infinite',
      'score-bump': 'bump 0.3s ease-out'
    }

DEPLOYMENT:
  - next.config.js:
    const isProd = process.env.NODE_ENV === 'production'
    module.exports = {
      output: 'export',
      basePath: isProd ? '/tic-tac-toe' : '',
      assetPrefix: isProd ? '/tic-tac-toe/' : '',
      images: { unoptimized: true }
    }

PACKAGE.JSON:
  - scripts:
    "build": "next build",
    "predeploy": "npm run build",
    "deploy": "touch out/.nojekyll && gh-pages -d out -t true"
```

## Validation Loop

### Level 1: Syntax & Style
```bash
# Install dependencies first
npm install

# Run TypeScript compiler check
npm run type-check
# Or: npx tsc --noEmit

# Run ESLint
npm run lint
# Or: npx eslint . --ext ts,tsx

# Expected: No errors. If errors, READ and fix them.
```

### Level 2: Component Tests
```typescript
// Test game logic functions
describe('Game Logic', () => {
  test('detects horizontal win', () => {
    const board = ['X', 'X', 'X', null, 'O', 'O', null, null, null]
    const { winner, line } = checkWinner(board)
    expect(winner).toBe('X')
    expect(line).toEqual([0, 1, 2])
  })

  test('detects draw', () => {
    const board = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X']
    expect(checkDraw(board)).toBe(true)
  })

  test('square click updates board', () => {
    // Test handleSquareClick in isolation
  })
})
```

```bash
# Run tests
npm test
# If using Jest: npm run test -- --watch
```

### Level 3: Build & Preview
```bash
# Development server
npm run dev
# Open http://localhost:3000

# Production build
npm run build

# Serve production build locally
npx serve@latest out
# Or: python3 -m http.server 3000 -d out

# Manual testing checklist:
# - [ ] Click squares alternates X and O
# - [ ] Winner is detected and highlighted
# - [ ] Score increments correctly
# - [ ] Reset game works
# - [ ] Mobile responsive at 375px width
# - [ ] Keyboard navigation works
```

### Level 4: Deployment Validation
```bash
# GitHub Pages deployment
npm run deploy

# Wait 2-3 minutes, then visit:
# https://[username].github.io/tic-tac-toe

# Vercel deployment (alternative)
npx vercel --prod

# Check deployment:
# - [ ] Game loads without 404 errors
# - [ ] All styles applied correctly
# - [ ] No console errors
# - [ ] Game fully functional
```

## Final Validation Checklist
- [ ] TypeScript compilation passes: `npx tsc --noEmit`
- [ ] No ESLint errors: `npm run lint`
- [ ] All game logic tests pass: `npm test`
- [ ] Game playable in development: `npm run dev`
- [ ] Production build succeeds: `npm run build`
- [ ] Static export works locally: `npx serve out`
- [ ] Deployed successfully to GitHub Pages or Vercel
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] Keyboard accessible (Tab navigation works)
- [ ] No console errors in production

---

## Anti-Patterns to Avoid
- ❌ Don't use dynamic imports (breaks static export)
- ❌ Don't use Next.js Image without unoptimized flag
- ❌ Don't forget basePath for GitHub Pages
- ❌ Don't use server components for client interactivity
- ❌ Don't mutate state directly (use immutable updates)
- ❌ Don't skip TypeScript types for event handlers
- ❌ Don't use dynamic Tailwind classes (they won't compile)
- ❌ Don't forget cleanup in useEffect hooks
- ❌ Don't hardcode repository name in components
- ❌ Don't skip accessibility attributes

## Debugging Tips
```yaml
Common Issues:
  - Styles not loading on GitHub Pages:
    Fix: Check basePath and assetPrefix in next.config.js

  - 404 on refresh in GitHub Pages:
    Fix: Add .nojekyll file, use hash routing if needed

  - Tailwind classes not applying:
    Fix: Use full class names, check content paths in config

  - TypeScript errors with event handlers:
    Fix: Type as React.MouseEvent<HTMLButtonElement>

  - State updates not reflecting:
    Fix: Use functional updates: setState(prev => ...)
```

---

## PRP Confidence Score: 9/10

This PRP provides comprehensive context including:
- ✅ Complete documentation references
- ✅ Detailed TypeScript types
- ✅ Step-by-step implementation tasks
- ✅ Common pitfalls and solutions
- ✅ Executable validation gates
- ✅ Deployment configuration
- ✅ Debugging guidance

The AI agent should be able to implement this game successfully in one pass with this context.