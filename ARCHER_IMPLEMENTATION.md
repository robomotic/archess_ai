# ArChess Implementation Summary

## Added Features

### New Piece: Archer
- **Notation**: 'A' (white), 'a' (black)
- **Starting positions**: B2, G2 (white), B7, G7 (black)
- **Value**: 3.5 points (between knight and rook)

### Archer Abilities

#### Movement
- Moves like a King (one square in any direction)
- **Cannot capture by moving** - can only move to empty squares
- In each turn, can either move OR attack (not both)

#### Ranged Attack
- Can attack instead of moving
- **No line of sight required** - ignores obstacles
- Attack range:
  - All 8 adjacent squares (1 cell away)
  - Vertical snipe: exactly 3 cells up or down

#### Special Attack Rules
- **vs Regular pieces**: Always successful (piece captured)
- **vs Knights**: 50% chance of paralysis, 50% chance of failure
  - Paralyzed knights marked as 'X' (white) or 'x' (black)
  - Paralyzed knights cannot move but can be captured normally
- **vs King**: Puts king in check (doesn't capture)

### Implementation Details

#### Files Modified:
1. **moves.js**: Added Archer movement and attack logic
2. **intelligence.js**: Added Archer evaluation (3.5 points, paralyzed knights 1 point)
3. **check.js**: Added Archer check detection
4. **index.html**: Added Archer and paralyzed knight images
5. **script.js**: Updated starting FEN with Archers

#### Key Functions:
- `availableMoves()`: Handles Archer movement and attack generation
- `makeMove()`: Processes ranged attacks and knight paralysis
- `inCheck()`: Detects Archer checks (adjacent + vertical snipe)
- `evaluate()`: Values Archers at 3.5 points

### Usage
1. Click on an Archer to see movement and attack options
2. Blue squares = movement options (empty squares only)
3. Red squares = attack options (enemy pieces)
4. When attacking knights, outcome is random (50% paralysis chance)

### Visual Indicators
- Archers: Custom bow and arrow SVG icons
- Paralyzed knights: Same knight icon but cannot move (marked as X/x internally)

### Starting Position
```
8 | r n b q k b n r
7 | p a p p p p a p  ← Black archers on b7, g7
6 | . . . . . . . .
5 | . . . . . . . .
4 | . . . . . . . .
3 | . . . . . . . .
2 | P A P P P P A P  ← White archers on b2, g2
1 | R N B Q K B N R
  | a b c d e f g h
```

The Archer adds tactical depth with its unique ranged capabilities and knight vulnerability mechanic!