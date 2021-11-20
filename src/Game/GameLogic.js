export const createInitialBoardState = (rows, columns) => {
	// Initialize 2d boardState array
	let initialBoardState = [];

	for (let row = 0; row < rows; row++) {
		initialBoardState[row] = [];
		for (let column = 0; column < columns; column++) {
			initialBoardState[row][column] = '';
		}
	}

	return initialBoardState;
};

export const createDiagonalBoardState = (rows, columns) => {
	// Initialize 2d boardState array
	let diagonalBoardState = [];

	for (let row = 0; row < rows; row++) {
		diagonalBoardState[row] = [];
		for (let column = 0; column < columns; column++) {
			diagonalBoardState[row][column] = '';
		}
	}

	return diagonalBoardState;
};

export const checkBoardState = (currentBoardState, lengthReqForWin) => {
	let gameIsWon = false;
	let winner = null;

	// Loop through our 2d board state array
	for (let currentRow of currentBoardState) {
		let inARow = 0;
		let XorO = '';
		for (let tileValue of currentRow) {
			if (tileValue !== '') {
				// Skip blank tiles
				if (tileValue === XorO) {
					// If current tile is same as previous
					inARow++;

					if (inARow === lengthReqForWin) {
						// If we've reached a winning state
						gameIsWon = true;
						winner = XorO;
						break;
					}
				} else {
					// Reset our tracking array with new starting value
					inARow = 1;
					XorO = tileValue;
				}
			}
		}
	}

	return [gameIsWon, winner];
};

export const checkColumns = (
	currentBoardState,
	rowLen,
	columnLen,
	lengthReqForWin
) => {
	let columnBasedBoardState = createInitialBoardState(rowLen, columnLen);

	// Convert 2d row array to 2d column array
	for (let [i, currentRow] of currentBoardState.entries()) {
		for (let [j, XorO] of currentRow.entries()) {
			columnBasedBoardState[j][i] = XorO;
		}
	}

	const winOrNaw = checkBoardState(columnBasedBoardState, lengthReqForWin);

	return winOrNaw;
};

export const checkDiagonals = (
	currentBoardState,
	rowLen,
	columnLen,
	lengthReqForWin
) => {
	let gameIsWon = false;
	let winner = '';
	let diagonalBasedBoardState = createDiagonalBoardState(rowLen, columnLen);

	// Convert 2d row array to 2d diagonal array

	// [['']['','']['','','']['','','','']['','','','','']]

	return [gameIsWon, winner];
};
