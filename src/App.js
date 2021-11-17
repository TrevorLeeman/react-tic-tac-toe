import { useState, useEffect, useCallback } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './UI/Header';
import Button from './UI/Button';
import Grid from './Grid/Grid';

const CssReset = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	display: flex;
	flex-direction: column;

	background: linear-gradient(
		270deg,
		#f94144,
		#f3722c,
		#f8961e,
		#f9844a,
		#f9c74f,
		#90be6d,
		#43aa8b,
		#4d908e,
		#577590,
		#277da1
	);
	/* background: linear-gradient(
		270deg,
		#ff4800,
		#ff5400,
		#ff6000,
		#ff6d00,
		#ff7900,
		#ff8500,
		#ff9100,
		#ff9e00,
		#ffaa00,
		#ffb600
	); */
	background-size: 1000% 1000%;

	animation: animatedGradient 20s ease infinite;

	@keyframes animatedGradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	font-family: 'Anton', sans-serif;
	font-size: 0.4em;

	@media (min-width: 420px) {
		font-size: 0.6em;
	}

	@media (min-width: 600px) {
		font-size: 0.8em;
	}

	@media (min-width: 800px) {
		font-size: 1em;
	}
`;

const StyledApp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	height: 100%;
`;

const StyledGrid = styled(Grid)`
	margin-top: 3em;
	margin-bottom: 3em;
`;

const StyledHeader = styled(Header)`
	margin-bottom: 2.2em;
`;

const createInitialBoardState = (rows, columns) => {
	// Initialize boardState arrays
	let initialBoardState = [];

	for (let row = 0; row < rows; row++) {
		initialBoardState[row] = [];
		for (let column = 0; column < columns; column++) {
			initialBoardState[row][column] = '';
		}
	}

	return initialBoardState;
};

const checkRows = (currentBoardState, rowLen, lengthReqForWin) => {
	let gameIsWon = false;
	let winner = '';

	currentBoardState.forEach((currentRow) => {
		const getXs = currentRow.filter((XorO) => XorO === 'X');
		const getOs = currentRow.filter((XorO) => XorO === 'O');

		if (getXs.length === lengthReqForWin) {
			gameIsWon = true;
			winner = 'X';
		}
		if (getOs.length === lengthReqForWin) {
			gameIsWon = true;
			winner = 'O';
		}
	});

	return [gameIsWon, winner];
};

const checkColumns = (
	currentBoardState,
	rowLen,
	columnLen,
	lengthReqForWin
) => {
	let gameIsWon = false;
	let winner = '';
	let columns = createInitialBoardState();

	return [gameIsWon, winner];
};

const checkDiagonals = (
	currentBoardState,
	rowLen,
	columnLen,
	lengthReqForWin
) => {
	let gameIsWon = false;
	let winner = '';
	return [gameIsWon, winner];
};

const App = () => {
	const [rows, setRows] = useState(3);
	const [columns, setColumns] = useState(3);
	const [lengthReqForWin, setLengthReqForWin] = useState(2);
	const [boardState, setBoardState] = useState(
		createInitialBoardState(rows, columns)
	);
	const [turnCounter, setTurnCounter] = useState(1);
	const [gameComplete, setGameComplete] = useState(false);

	const resetBoardState = useCallback(() => {
		setBoardState(createInitialBoardState(rows, columns));
		setGameComplete(false);
	}, [rows, columns]);

	const updateBoardState = useCallback((row, column, XorO) => {
		setBoardState((currentBoardState) => {
			let newBoardState = [...currentBoardState];
			newBoardState[row][column] = XorO;
			return newBoardState;
		});

		setTurnCounter((currentTurnCount) => currentTurnCount + 1);
	}, []);

	const checkForWinner = useCallback(() => {
		const [rowWin, rowWinner] = checkRows(boardState, columns, lengthReqForWin);
		const [columnWin, columnWinner] = checkColumns(
			boardState,
			columns,
			rows,
			lengthReqForWin
		);
		const [diagonalWin, diagonalWinner] = checkDiagonals(
			boardState,
			columns,
			rows,
			lengthReqForWin
		);

		if (rowWin || columnWin || diagonalWin) {
			setGameComplete(true);
			console.log('We have a winner!!!');
		}
	}, [boardState, columns, rows]);

	useEffect(() => {
		checkForWinner();
	}, [checkForWinner]);

	return (
		<>
			<CssReset />
			<AppContainer>
				<StyledHeader title='React-Tac-Toe' />
				<StyledApp>
					<Button clickHandler={resetBoardState}>
						{gameComplete ? 'New Game' : 'Reset Game'}
					</Button>
					<StyledGrid
						rows={rows}
						columns={columns}
						boardState={boardState}
						turnCounter={turnCounter}
						gameComplete={gameComplete}
						updateBoardState={updateBoardState}
					/>
				</StyledApp>
			</AppContainer>
		</>
	);
};

export default App;
