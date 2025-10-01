# ArChess - Chess Variant with Archer Piece

ArChess is a chess variant that introduces a new piece called the **Archer**, which adds ranged attack capabilities to the traditional chess game.

## Key Differences from Standard Chess

### The Archer Piece

**Notation**: 
- White Archer: `A`
- Black Archer: `a`

### Initial Board Setup

The starting position is identical to standard chess with the following modifications:
- White Archers replace the pawns on **B2** and **G2**
- Black Archers replace the pawns on **B7** and **G7**

```
Starting Position:
8 | r n b q k b n r
7 | p a p p p p a p  <- Black archers on b7 and g7
6 | . . . . . . . .
5 | . . . . . . . .
4 | . . . . . . . .
3 | . . . . . . . .
2 | P A P P P P A P  <- White archers on b2 and g2
1 | R N B Q K B N R
    a b c d e f g h
```

## Archer Rules

### Movement
- The Archer moves like a king: **one square in any direction** (horizontally, vertically, or diagonally)
- **Important**: The Archer cannot capture pieces through movement
- The Archer can only move to **empty squares**
- It cannot occupy a square with any other piece (friend or foe)

### Ranged Attack
- The Archer can perform a ranged attack **instead of moving**
- In one turn, the Archer can either **move OR attack**, but not both
- The ranged attack **does not require line of sight**
- It can target any eligible opponent piece regardless of obstacles between the Archer and target

### Attack Range
The Archer can target opponent pieces that are:

1. **Adjacent squares**: 1 cell away in any direction (including diagonally)
   - From B2, can attack: A1, A2, A3, B1, B3, C1, C2, C3

2. **Vertical range**: 3 cells away vertically (only directly up or down)
   - From B2, can attack B5 (three cells up)
   - From B7, can attack B4 (three cells down)

**Important**: The target must be within board boundaries (a1 to h8)

### Attack Effects

#### Standard Pieces
- For all pieces except knights, the ranged attack is **always successful**
- The target piece is **captured and removed** from the board

#### Knights - Special Rule
When attacking a knight, the outcome is determined by a **coin toss**:
- **Heads (50% chance)**: The knight is **paralyzed**
  - Remains on the board but can never move again
  - Can still be captured by other pieces normally
  - Blocks other pieces from moving to its square
- **Tails (50% chance)**: The attack fails, knight is unaffected

#### Attacking the King
- The ranged attack can target the opponent's king
- If successful, this puts the king in **check**
- The king is not captured, but the opponent must respond to the check
- Standard check rules apply (move king, block attack, or capture the Archer)

## Additional Notes

- The Archer cannot participate in castling
- Paralysis of a knight is **permanent and irreversible**
- The Archer itself can be captured by other pieces through normal movement
- Since the ranged attack ignores obstacles, it can target pieces behind other pieces

## Strategic Implications

The Archer introduces several new strategic elements:
1. **Area control**: Archers control multiple squares without line-of-sight requirements
2. **Knight vulnerability**: Knights face unique risk from Archer attacks
3. **Defensive positioning**: Pieces cannot hide behind others from Archer attacks
4. **Tempo considerations**: Choice between moving and attacking adds tactical depth

## Implementation Details

### FEN Notation
- Archers are represented as 'A' (white) and 'a' (black) in FEN strings
- Paralyzed knights require additional game state tracking

### Visual Representation
- Archers use a distinct visual symbol (↹ or custom archer icon)
- Paralyzed knights should have a visual indicator (e.g., red overlay or special marking)