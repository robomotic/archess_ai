# ArChess - Chess Variant with AI

This is a web-based chess variant game featuring the **Archer** piece and an AI opponent.

## Features:
- **ArChess Variant**: Implements the Archer piece with ranged attack capabilities
- **Visual Chess Board**: Renders a complete chess board with custom Archer piece graphics
- **Interactive Gameplay**: Click-based piece movement with visual feedback and optional move arrows
- **AI Opponent**: Plays against an AI that understands Archer tactics using negamax algorithm
- **Unique Mechanics**: Knight paralysis system and ranged attacks without line-of-sight
- **Game State Management**: Supports FEN notation with Archer pieces, tracks checkmate/stalemate
- **Responsive Design**: Adapts to different screen sizes

## The Archer Piece
The Archer is a new piece that:
- Moves like a King (1 square in any direction) but only to empty squares
- Can perform ranged attacks instead of moving
- Attacks adjacent squares (8 directions) or 3 cells vertically up/down
- Has a 50% chance to paralyze knights instead of capturing them
- Ignores obstacles when attacking (no line-of-sight requirement)

See `docs/archess-rules.md` for complete rules and `ARCHER_IMPLEMENTATION.md` for technical details.

## How It Works

The application consists of an `index.html` file that serves as the main entry point. Here's a detailed breakdown of its functionality:

1. **Chess Piece Image Preloading**: The hidden `<div>` contains image elements that preload all chess piece graphics, ensuring they're cached and ready for rendering.

2. **Game Canvas**: A `<canvas>` element serves as the main game board, where the chess board and pieces are drawn programmatically using JavaScript.

3. **Control Panel**: The interface provides interactive buttons for loading and exporting board states, toggling AI and autoplay modes, and undoing moves.

4. **Information Display**: A `<pre>` element displays game information, such as move history and AI thinking depth.

5. **JavaScript Dependencies**: The application loads several JavaScript files that handle chess move generation, check detection, utility functions, AI logic, and the main game control.

## Key Features
- **Visual Chess Board**: The game renders a complete chess board with proper coloring.
- **Interactive Gameplay**: Click-based piece movement with visual feedback and optional move arrows.
- **AI Opponent**: Implements a chess engine using a negamax algorithm, configurable for different difficulty levels.
- **Game State Management**: Maintains move history for undo functionality and supports FEN notation for position import/export.
- **Responsive Design**: The canvas automatically resizes to fit the screen, adapting to different viewport sizes.
