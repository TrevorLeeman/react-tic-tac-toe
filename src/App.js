import { useState, useEffect, useCallback } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './UI/Header';
import Button from './UI/Button';
import Grid from './Grid/Grid';
import Footer from './UI/Footer';
import {
	createInitialBoardState,
	checkBoardState,
	checkColumns,
	checkDiagonals,
} from './Game/GameLogic';

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
	padding: 2rem 0;
`;

const StyledButton = styled(Button)`
	margin-bottom: 2rem;
`;

const App = () => {
	const [rows, setRows] = useState(5);
	const [columns, setColumns] = useState(5);
	const [lengthReqForWin, setLengthReqForWin] = useState(4);
	const [boardState, setBoardState] = useState(
		createInitialBoardState(rows, columns)
	);
	const [firstTurn, setFirstTurn] = useState(1);
	const [turnCounter, setTurnCounter] = useState(firstTurn);
	const [gameComplete, setGameComplete] = useState(false);

	const resetBoardState = useCallback(() => {
		setBoardState(createInitialBoardState(rows, columns));
		setGameComplete(false);
		setTurnCounter(firstTurn + 1);
		setFirstTurn((currentValue) => currentValue + 1);
	}, [rows, columns, firstTurn]);

	const updateBoardState = useCallback((row, column, XorO) => {
		setBoardState((currentBoardState) => {
			let newBoardState = [...currentBoardState];
			newBoardState[row][column] = XorO;
			return newBoardState;
		});

		setTurnCounter((currentTurnCount) => currentTurnCount + 1);
	}, []);

	const checkForWinner = useCallback(() => {
		const [rowWin, rowWinner] = checkBoardState(boardState, lengthReqForWin);
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
			console.log(
				`We have a winner!!! ${rowWinner ?? columnWinner ?? diagonalWinner}`
			);
		}
	}, [boardState, columns, lengthReqForWin, rows]);

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
