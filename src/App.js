import Grid from './Grid/Grid';
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
	align-items: center;
	justify-content: center;

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

const App = () => {
	const rows = 3;
	const columns = 3;

	const [boardState, setBoardState] = useState(
		createInitialBoardState(rows, columns)
	);
	const [turnCounter, setTurnCounter] = useState(1);
	const [gameComplete, setGameComplete] = useState(false);

	const checkBoardState = (currentBoardState) => {};

	const updateBoardState = (row, column, XorO) => {
		setBoardState((currentBoardState) => {
			currentBoardState[row][column] = XorO;
			return currentBoardState;
		});

		setTurnCounter((currentTurnCount) => currentTurnCount + 1);
	};

	return (
		<>
			<CssReset />
			<AppContainer>
				<StyledApp>
					<Grid
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
