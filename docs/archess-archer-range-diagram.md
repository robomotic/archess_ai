# Archer Attack Range Visualization

## Attack Pattern Diagram

The Archer has two distinct attack ranges:
1. **Adjacent attacks**: All 8 surrounding squares (1 cell away)
2. **Vertical snipe**: Exactly 3 cells directly up or down

```
Legend:
A = Archer position
X = Can attack (adjacent - 1 cell away)
V = Can attack (vertical - 3 cells away)
. = Cannot attack from this position
* = Can move here (if empty)

Example: Archer at position D4

    a   b   c   d   e   f   g   h
  +---+---+---+---+---+---+---+---+
8 | . | . | . | . | . | . | . | . |
  +---+---+---+---+---+---+---+---+
7 | . | . | . | V | . | . | . | . |  <- Can attack (3 up)
  +---+---+---+---+---+---+---+---+
6 | . | . | . | . | . | . | . | . |
  +---+---+---+---+---+---+---+---+
5 | . | . | X | X | X | . | . | . |  <- Can attack (adjacent)
  +---+---+---+---+---+---+---+---+
4 | . | . | X | A | X | . | . | . |  <- Archer here
  +---+---+---+---+---+---+---+---+
3 | . | . | X | X | X | . | . | . |  <- Can attack (adjacent)
  +---+---+---+---+---+---+---+---+
2 | . | . | . | . | . | . | . | . |
  +---+---+---+---+---+---+---+---+
1 | . | . | . | V | . | . | . | . |  <- Can attack (3 down)
  +---+---+---+---+---+---+---+---+
```

## Movement Pattern

The Archer moves like a King but **cannot capture by moving**:

```
Movement only (to empty squares):

    a   b   c   d   e   f   g   h
  +---+---+---+---+---+---+---+---+
5 | . | . | * | * | * | . | . | . |
  +---+---+---+---+---+---+---+---+
4 | . | . | * | A | * | . | . | . |
  +---+---+---+---+---+---+---+---+
3 | . | . | * | * | * | . | . | . |
  +---+---+---+---+---+---+---+---+

* = Can move here (only if square is empty)
```

## Edge Cases

### Archer Near Board Edge (A1)

```
    a   b   c   d   e   f   g   h
  +---+---+---+---+---+---+---+---+
4 | V | . | . | . | . | . | . | . |  <- Can attack (3 up)
  +---+---+---+---+---+---+---+---+
3 | . | . | . | . | . | . | . | . |
  +---+---+---+---+---+---+---+---+
2 | X | X | . | . | . | . | . | . |  <- Can attack (adjacent)
  +---+---+---+---+---+---+---+---+
1 | A | X | . | . | . | . | . | . |  <- Archer at A1
  +---+---+---+---+---+---+---+---+
  (Cannot attack 3 down - off board)
```

### Archer at B2 (Starting Position for White)

```
    a   b   c   d   e   f   g   h
  +---+---+---+---+---+---+---+---+
5 | . | V | . | . | . | . | . | . |  <- Can attack B5
  +---+---+---+---+---+---+---+---+
4 | . | . | . | . | . | . | . | . |
  +---+---+---+---+---+---+---+---+
3 | X | X | X | . | . | . | . | . |  <- Can attack adjacent
  +---+---+---+---+---+---+---+---+
2 | X | A | X | . | . | . | . | . |  <- White Archer start
  +---+---+---+---+---+---+---+---+
1 | X | X | X | . | . | . | . | . |  <- Can attack adjacent
  +---+---+---+---+---+---+---+---+
  (Cannot attack 3 down - off board)
```

## Attack Through Obstacles

The Archer's ranged attack **ignores all pieces between it and the target**:

```
Example: Archer can attack through pieces

    a   b   c   d   e   f   g   h
  +---+---+---+---+---+---+---+---+
7 | . | n | . | . | . | . | . | . |  <- Black knight (target)
  +---+---+---+---+---+---+---+---+
6 | . | P | . | . | . | . | . | . |  <- White pawn (obstacle)
  +---+---+---+---+---+---+---+---+
5 | . | p | . | . | . | . | . | . |  <- Black pawn (obstacle)
  +---+---+---+---+---+---+---+---+
4 | . | A | . | . | . | . | . | . |  <- White Archer
  +---+---+---+---+---+---+---+---+

The Archer at B4 CAN attack the knight at B7 (3 cells up)
despite the pawns at B5 and B6 blocking the path.
```

## Special Interactions

### Knight Paralysis

When an Archer attacks a Knight:
- 50% chance: Knight is paralyzed (marked with ⊗)
- 50% chance: Attack fails, Knight unaffected

```
Before attack:          After successful paralysis:
    
  +---+---+---+         +---+---+---+
3 | . | N | . |       3 | . | ⊗ | . |  <- Paralyzed Knight
  +---+---+---+         +---+---+---+     (cannot move, can be captured)
2 | A | . | . |       2 | A | . | . |
  +---+---+---+         +---+---+---+
```

### King Check

Archer can put King in check from its attack positions:

```
    a   b   c   d   e   f   g   h
  +---+---+---+---+---+---+---+---+
8 | . | . | . | k | . | . | . | . |  <- Black King in check
  +---+---+---+---+---+---+---+---+
7 | . | . | . | . | . | . | . | . |
  +---+---+---+---+---+---+---+---+
6 | . | . | . | . | . | . | . | . |
  +---+---+---+---+---+---+---+---+
5 | . | . | . | A | . | . | . | . |  <- White Archer (3 cells from King)
  +---+---+---+---+---+---+---+---+

The King must respond to check (move, block, or capture the Archer)
```

## Summary Table

| Range Type | Distance | Directions | Can Attack Through Pieces |
|------------|----------|------------|---------------------------|
| Adjacent   | 1 cell   | All 8      | N/A (adjacent)           |
| Vertical   | 3 cells  | Up/Down    | Yes                      |
| Movement   | 1 cell   | All 8      | No (empty squares only)  |