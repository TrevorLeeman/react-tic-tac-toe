import { useState, useEffect, useCallback } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './UI/Header';
import Button from './UI/Button';
import Grid from './Grid/Grid';
import Footer from './UI/Footer';

const CssReset = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html{
	font-family: 'Saira Condensed', sans-serif;

	font-size: 0.6em;

	@media (min-width: 420px) {
		font-size: 0.8em;
	}

	@media (min-width: 600px) {
		font-size: 1em;
	}
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
`;

const StyledApp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	height: 100%;
	padding: 2rem 0;
`;

const StyledButton = styled(Button)`
	margin-bottom: 2rem;
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

const checkRows = (currentBoardState, lengthReqForWin) => {
	let gameIsWon = false;
	let winner = null;

	// Loop through our 2d board state array
	for (let currentRow of currentBoardState) {
		let inARow = [];
		for (let XorO of currentRow) {
			if (XorO === inARow[0] && XorO !== '') {
				// If current tile is same as previous
				inARow.push(XorO);

				if (inARow.length === lengthReqForWin && inARow[0] !== '') {
					// If we've reached a winning state
					gameIsWon = true;

					if (inARow[0] === 'X') {
						winner = 'X';
					} else if (inARow[0] === 'O') {
						winner = 'O';
					}

					break;
				}
			} else if (XorO !== '') {
				// Reset our tracking array with new starting value
				inARow = [XorO];
			}
		}
	}

	return [gameIsWon, winner];
};

const checkColumns = (currentBoardState, lengthReqForWin) => {
	let gameIsWon = false;
	let winner = '';
	let columnBasedBoardState = [];

	console.log(currentBoardState.entries());

	for (let [index, currentRow] of currentBoardState.entries()) {
		for (let row of currentRow) {
		}
	}
	// console.log(currentBoardState);

	return [gameIsWon, winner];
};

const checkDiagonals = (currentBoardState, lengthReqForWin) => {
	let gameIsWon = false;
	let winner = '';
	return [gameIsWon, winner];
};

const App = () => {
	const [rows, setRows] = useState(5);
	const [columns, setColumns] = useState(5);
	const [lengthReqForWin, setLengthReqForWin] = useState(4);
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
		const [rowWin, rowWinner] = checkRows(boardState, lengthReqForWin);
		const [columnWin, columnWinner] = checkColumns(boardState, lengthReqForWin);
		const [diagonalWin, diagonalWinner] = checkDiagonals(
			boardState,
			lengthReqForWin
		);

		if (rowWin || columnWin || diagonalWin) {
			setGameComplete(true);
			console.log(
				`We have a winner!!! ${rowWinner ?? columnWinner ?? diagonalWinner}`
			);
		}
	}, [boardState, lengthReqForWin]);

	useEffect(() => {
		checkForWinner();
	}, [checkForWinner]);

	return (
		<>
			<CssReset />
			<AppContainer>
				<Header title='React-Tac-Toe' />
				<StyledApp>
					<StyledButton clickHandler={resetBoardState}>
						{gameComplete ? 'New Game' : 'Reset Game'}
					</StyledButton>
					<Grid
						rows={rows}
						columns={columns}
						boardState={boardState}
						turnCounter={turnCounter}
						gameComplete={gameComplete}
						updateBoardState={updateBoardState}
					/>
				</StyledApp>
				<Footer />
			</AppContainer>
		</>
	);
};

export default App;
