function availableMoves(state, side){
	var moves = []
	for (var r = 0; r < 8; r++){
		for (var c = 0; c < 8; c++){
            var piece = state.board[r][c]
			if (piece == " " || (side == "w" ? isLowerCase(piece) : isUpperCase(piece))) continue;
            
            // Handle paralyzed knights and normal pieces
            var originalPiece = piece
            if (piece == "X" || piece == "x"){
                piece = piece == "X" ? "N" : "n"
                // Check if this paralyzed knight belongs to the current side
                if (side == "w" ? piece != "N" : piece != "n") continue;
                piece = piece.toLowerCase()
            } else {
                piece = piece.toLowerCase()
            }
            if (piece == "p"){
                rowAhead = r + (side == "w" ? -1 : 1)
                if (state.board[rowAhead][c] == " "){
                    moves.push([[r,c], [rowAhead, c]])
                }
                if (r == (side == "w" ? 6 : 1) && state.board[r + (side == "w" ? -1 : 1)][c] == " " && state.board[r + (side == "w" ? -2 : 2)][c] == " "){
                    moves.push([[r,c], [r + (side == "w" ? -2 : 2), c]])
                }
                if (c > 0){
                    dl = state.board[rowAhead][c - 1]
                    if (dl != " " && (side == "w" ? isLowerCase(dl) : isUpperCase(dl))){
                        moves.push([[r,c],[rowAhead, c-1]])
                    }
                }
                if (c < 7){ 
                    dr = state.board[rowAhead][c + 1]
                    if (dr != " " && (side == "w" ? isLowerCase(dr) : isUpperCase(dr))) {
                        moves.push([[r,c],[rowAhead, c+1]])
                    }
                }
                
            } else if (piece == "r" || piece == "q"){
                for (var file = c + 1; file < 8; file ++){
                    var dstnt = state.board[r][file]
                    if (dstnt == " "){
                        moves.push([[r,c],[r,file]])
                    } else if (side == "w" ? isUpperCase(dstnt) : isLowerCase(dstnt)){
                        break
                    } else if (side == "w" ? isLowerCase(dstnt) : isUpperCase(dstnt)){
                        moves.push([[r,c],[r,file]])
                        break
                    }
                }
                for (var file = c - 1; file >= 0; file --){
                    var dstnt = state.board[r][file]
                    if (dstnt == " "){
                        moves.push([[r,c],[r,file]])
                    } else if (side == "w" ? isUpperCase(dstnt) : isLowerCase(dstnt)){
                        break
                    } else if (side == "w" ? isLowerCase(dstnt) : isUpperCase(dstnt)){
                        moves.push([[r,c],[r,file]])
                        break
                    }
                }
                for (var row = r + 1; row < 8; row ++){
                    var dstnt = state.board[row][c]
                    if (dstnt == " "){
                        moves.push([[r,c],[row,c]])
                    } else if (side == "w" ? isUpperCase(dstnt) : isLowerCase(dstnt)){
                        break
                    } else if (side == "w" ? isLowerCase(dstnt) : isUpperCase(dstnt)){
                        moves.push([[r,c],[row,c]])
                        break
                    }
                }
                for (var row = r - 1; row >= 0; row --){
                    var dstnt = state.board[row][c]
                    if (dstnt == " "){
                        moves.push([[r,c],[row,c]])
                    } else if (side == "w" ? isUpperCase(dstnt) : isLowerCase(dstnt)){
                        break
                    } else if (side == "w" ? isLowerCase(dstnt) : isUpperCase(dstnt)){
                        moves.push([[r,c],[row,c]])
                        break
                    }
                }
            } if (piece == "b" || piece == "q"){
                for (var d = 1; d <= Math.min(7-r, 7-c); d++){		//bottom right
                    var dstnt = state.board[r+d][c+d]
                    if (dstnt == " "){
                        moves.push([[r,c],[r+d,c+d]])
                    } else if (side == "w" ? isUpperCase(dstnt) : isLowerCase(dstnt)){
                        break
                    } else if (side == "w" ? isLowerCase(dstnt) : isUpperCase(dstnt)){
                        moves.push([[r,c],[r+d,c+d]])
                        break
                    }
                }
                for (var d = 1; d <= Math.min(7-r, c); d++){		//bottom left
                    var dstnt = state.board[r+d][c-d]
                    if (dstnt == " "){
                        moves.push([[r,c],[r+d,c-d]])
                    } else if (side == "w" ? isUpperCase(dstnt) : isLowerCase(dstnt)){
                        break
                    } else if (side == "w" ? isLowerCase(dstnt) : isUpperCase(dstnt)){
                        moves.push([[r,c],[r+d,c-d]])
                        break
                    }
                }
                for (var d = 1; d <= Math.min(r, 7-c); d++){		//top right
                    var dstnt = state.board[r-d][c+d]
                    if (dstnt == " "){
                        moves.push([[r,c],[r-d,c+d]])
                    } else if (side == "w" ? isUpperCase(dstnt) : isLowerCase(dstnt)){
                        break
                    } else if (side == "w" ? isLowerCase(dstnt) : isUpperCase(dstnt)){
                        moves.push([[r,c],[r-d,c+d]])
                        break
                    }
                }
                for (var d = 1; d <= Math.min(r, c); d++){			//top left
                    var dstnt = state.board[r-d][c-d]
                    if (dstnt == " "){
                        moves.push([[r,c],[r-d,c-d]])
                    } else if (side == "w" ? isUpperCase(dstnt) : isLowerCase(dstnt)){
                        break
                    } else if (side == "w" ? isLowerCase(dstnt) : isUpperCase(dstnt)){
                        moves.push([[r,c],[r-d,c-d]])
                        break
                    }
                }
            } else if (piece == "n"){
                // Check if knight is paralyzed
                if (originalPiece == "X" || originalPiece == "x"){
                    // Paralyzed knight cannot move
                    continue
                }
                
                var pnts = [[r+1,c+2], [r+1,c-2], [r-1,c+2], [r-1,c-2], [r+2,c+1], [r-2,c+1], [r+2,c-1], [r-2,c-1]].filter(p => p[0] >= 0 && p[1] >= 0 && p[0] < 8 && p[1] < 8)
                for (var p = 0; p < pnts.length; p ++){
                    var dstnt = state.board[pnts[p][0]][pnts[p][1]]
                    if (dstnt == " "){
                        moves.push([[r,c],[pnts[p][0],pnts[p][1]]])
                    } else if (side == "w" ? isLowerCase(dstnt) : isUpperCase(dstnt)){
                        moves.push([[r,c],[pnts[p][0],pnts[p][1]]])
                    }
                }
            } else if (piece == "k"){
                var pnts = [[r+1,c], [r+1,c+1], [r, c+1], [r-1,c+1], [r-1,c], [r-1,c-1], [r,c-1], [r+1,c-1]].filter(p => p[0] >= 0 && p[1] >= 0 && p[0] < 8 && p[1] < 8)
                for (var p = 0; p < pnts.length; p ++){
                    var dstnt = state.board[pnts[p][0]][pnts[p][1]]
                    if (dstnt == " "){
                        moves.push([[r,c],[pnts[p][0], pnts[p][1]]])
                    } else if (side == "w" ? isLowerCase(dstnt) : isUpperCase(dstnt)){
                        moves.push([[r,c],[pnts[p][0], pnts[p][1]]])
                    }
                }
                //castling stuf
                if (state.board[r][c+1] == " " && state.board[r][c+2] == " " && state.castling.includes(side == "w" ? "K" : "k") && !inCheck(state, side) && !inCheck(makeMove(state, side == "w" ? [[7,4],[7,5]] : [[0,4],[0,5]]), side)){
                    moves.push([[r,c], side == "w" ? [7,6] : [0,6]])
                    
                }
                if (state.board[r][c-1] == " " && state.board[r][c-2] == " " && state.board[r][c-3] == " " && state.castling.includes(side == "w" ? "Q" : "q") && !inCheck(state, side) && !inCheck(makeMove(state, side == "w" ? [[7,4],[7,3]] : [[0,4],[0,3]]), side)){
                    moves.push([[r,c], side == "w" ? [7,2] : [0,2]])
                }
            } else if (piece == "a"){  // Archer piece
                // Movement: like a king (1 square in any direction) but only to empty squares
                var movePnts = [[r+1,c], [r+1,c+1], [r, c+1], [r-1,c+1], [r-1,c], [r-1,c-1], [r,c-1], [r+1,c-1]].filter(p => p[0] >= 0 && p[1] >= 0 && p[0] < 8 && p[1] < 8)
                for (var p = 0; p < movePnts.length; p ++){
                    var dstnt = state.board[movePnts[p][0]][movePnts[p][1]]
                    if (dstnt == " "){  // Can only move to empty squares
                        moves.push([[r,c],[movePnts[p][0], movePnts[p][1]]])
                    }
                }
                
                // Ranged Attack: adjacent squares (8 directions) and vertical snipe (3 cells up/down)
                var attackPnts = []
                
                // Adjacent attacks (8 surrounding squares)
                var adjacentPnts = [[r+1,c], [r+1,c+1], [r, c+1], [r-1,c+1], [r-1,c], [r-1,c-1], [r,c-1], [r+1,c-1]]
                for (var p = 0; p < adjacentPnts.length; p++){
                    if (adjacentPnts[p][0] >= 0 && adjacentPnts[p][1] >= 0 && adjacentPnts[p][0] < 8 && adjacentPnts[p][1] < 8){
                        attackPnts.push(adjacentPnts[p])
                    }
                }
                
                // Vertical snipe attacks (3 cells up and down)
                if (r - 3 >= 0) attackPnts.push([r-3, c])  // 3 up
                if (r + 3 < 8) attackPnts.push([r+3, c])   // 3 down
                
                // Check for valid attack targets
                for (var p = 0; p < attackPnts.length; p++){
                    var target = state.board[attackPnts[p][0]][attackPnts[p][1]]
                    if (target != " " && (side == "w" ? isLowerCase(target) : isUpperCase(target))){
                        // This is a ranged attack move, we'll mark it with a special flag
                        moves.push([[r,c],[attackPnts[p][0], attackPnts[p][1]], "archerAttack"])
                    }
                }
		    }
		}
	}
	
	moves = moves.filter(m => !inCheck(makeMove(state, m), side))

	return moves
}

function makeMove(state, move){
	var cp = copyState(state)
	
	// Handle Archer ranged attacks
	if (move.length > 2 && move[2] == "archerAttack"){
		var target = cp.board[move[1][0]][move[1][1]]
		var targetLower = target.toLowerCase()
		
		// Special handling for knight attacks (coin toss for paralysis)
		if (targetLower == "n"){
			var coinToss = Math.random() < 0.5  // 50% chance
			if (coinToss){
				// Paralyze the knight - we'll use a special marker
				// For white knight: 'N' becomes 'X', for black knight: 'n' becomes 'x' (paralyzed)
				cp.board[move[1][0]][move[1][1]] = target == "N" ? "X" : "x"
			}
			// If coin toss fails, the attack does nothing (archer doesn't move)
			return cp
		} else {
			// For all other pieces, ranged attack is always successful
			cp.board[move[1][0]][move[1][1]] = " "  // Remove the target piece
		}
		// Archer doesn't move during ranged attack
		return cp
	}
	
	if (move[0][0] == 7 && move[0][1] == 4 && move[1][0] == 7 && move[1][1] == 6 && state.castling.includes("K")){			//white kingside castle
		cp.castling = cp.castling.replace("K", "")
		cp.castling = cp.castling.replace("Q", "")
		cp = makeMove(cp, [[7,7],[7,5]])
	} else if (move[0][0] == 0 && move[0][1] == 4 && move[1][0] == 0 && move[1][1] == 6 && state.castling.includes("k")){	//black kingside castle
		cp.castling = cp.castling.replace("k", "")
		cp.castling = cp.castling.replace("q", "")
		cp = makeMove(cp, [[0,7],[0,5]])
	} else if (move[0][0] == 7 && move[0][1] == 4 && move[1][0] == 7 && move[1][1] == 2 && state.castling.includes("Q")){	//white queenside castle
		cp.castling = cp.castling.replace("Q", "")
		cp.castling = cp.castling.replace("K", "")
		cp = makeMove(cp, [[7,0],[7,3]])
	} else if (move[0][0] == 0 && move[0][1] == 4 && move[1][0] == 0 && move[1][1] == 2 && state.castling.includes("q")){	//black queenside castle
		cp.castling = cp.castling.replace("q", "")
		cp.castling = cp.castling.replace("k", "")
		cp = makeMove(cp, [[0,0],[0,3]])
	} else if (move[0][0] == 0 && move[0][1] == 0){	//black top left castle move
		cp.castling = cp.castling.replace("q", "")
	} else if (move[0][0] == 0 && move[0][1] == 7){	//black top right castle move
		cp.castling = cp.castling.replace("k", "")
	} else if (move[0][0] == 7 && move[0][1] == 0){	//white bottom left castle move
		cp.castling = cp.castling.replace("Q", "")
	} else if (move[0][0] == 7 && move[0][1] == 7){	//white bottom right castle move
		cp.castling = cp.castling.replace("K", "")
	} else if (move[0][0] == 0 && move[0][1] == 4){	//black king moved
		cp.castling = cp.castling.replace("k", "")
		cp.castling = cp.castling.replace("q", "")
	} else if (move[0][0] == 7 && move[0][1] == 4){	//white king moved
		cp.castling = cp.castling.replace("K", "")
		cp.castling = cp.castling.replace("Q", "")
	} else if (move[0][0] == 1 && cp.board[move[0][0]][move[0][1]] == "P"){	//white pawn at end
		cp.board[move[0][0]][move[0][1]] = "Q"
	} else if (move[0][0] == 6 && cp.board[move[0][0]][move[0][1]] == "p"){	//white pawn at end
		cp.board[move[0][0]][move[0][1]] = "q"
	}
	
	
	cp.board[move[1][0]][move[1][1]] = cp.board[move[0][0]][move[0][1]]
	cp.board[move[0][0]][move[0][1]] = " "
	
	return cp
}
