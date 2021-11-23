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
	let diagonals = [];

	for (let i = 0; i < rows + columns - 1; i++) {
		diagonals.push([]);
	}

	return diagonals;
};

export const checkBoardState = (currentBoardState, lengthReqForWin) => {
	let gameIsWon = false;
	let winner = null;

	// Loop through our 2d board state array
	for (let currentRow of currentBoardState) {
		let inARow = 0;
		let XorO = '';
		for (let tileValue of currentRow) {
			if (tileValue === XorO && tileValue !== '') {
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

	return [gameIsWon, winner];
};

export const checkColumns = (
	currentBoardState,
	rowLen,
	columnLen,
	lengthReqForWin
) => {
	let columnBasedBoardState = createInitialBoardState(rowLen, columnLen);
	console.log(currentBoardState);
	console.log(columnBasedBoardState);

	// Convert 2d row array to 2d column array
	for (let [i, currentRow] of currentBoardState.entries()) {
		for (let [j, XorO] of currentRow.entries()) {
			columnBasedBoardState[j][i] = XorO;
		}
	}

	const columnWin = checkBoardState(columnBasedBoardState, lengthReqForWin);

	return columnWin;
};

export const checkDiagonals = (
	currentBoardState,
	rowLen,
	columnLen,
	lengthReqForWin
) => {
	let downLeftDiagonalBoardState = createDiagonalBoardState(rowLen, columnLen);
	let downRightDiagonalBoardState = createDiagonalBoardState(rowLen, columnLen);

	// Convert 2d row array to 2d diagonal arrays
	for (let [i, currentRow] of currentBoardState.entries()) {
		for (let [j, XorO] of currentRow.entries()) {
			downLeftDiagonalBoardState[i + j].push(XorO);
			downRightDiagonalBoardState[i - j + rowLen - 1].push(XorO);
		}
	}

	const bothDiagonals = [
		...downLeftDiagonalBoardState,
		...downRightDiagonalBoardState,
	].filter((diagonalArr) => diagonalArr.length >= lengthReqForWin);

	const diagonalWin = checkBoardState(bothDiagonals, lengthReqForWin);

	return diagonalWin;
};
