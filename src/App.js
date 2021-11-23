import { useState, useEffect, useCallback } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './UI/Header';
import Menu from './UI/Menu/Menu';
import Grid from './Grid/Grid';
import Footer from './UI/Footer';
import Modal from './UI/Modal/Modal';
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
	min-width: 300px;
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
	display: grid;
	grid-template-rows: fit-content 1fr;
	grid-template-columns: 1fr;
	grid-template-areas:
		'controls'
		'grid';
	gap: 2rem;
	place-items: center;
	padding: 2rem 0;

	@media (min-width: 400px) {
		padding: 2rem;
	}

	@media (min-width: 1440px) {
		grid-template-rows: 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas: 'controls grid .';
	}
`;

const App = () => {
	const [rows, setRows] = useState(3);
	const [columns, setColumns] = useState(3);
	const [lengthReqForWin, setLengthReqForWin] = useState(3);
	const [boardState, setBoardState] = useState(
		createInitialBoardState(rows, columns)
	);
	const [firstTurn, setFirstTurn] = useState(1);
	const [turnCounter, setTurnCounter] = useState(firstTurn);
	const [gameComplete, setGameComplete] = useState(false);
	const [modalActive, setModalActive] = useState(false);
	const [player1WinCount, setPlayer1WinCount] = useState(0);
	const [player2WinCount, setPlayer2WinCount] = useState(0);

	const resetBoardState = useCallback(
		(event, numRows = rows, numColumns = columns) => {
			setBoardState(createInitialBoardState(numRows, numColumns));
			setGameComplete(false);
			setTurnCounter(firstTurn + 1);
			setFirstTurn((currentValue) => currentValue + 1);
		},
		[columns, firstTurn, rows]
	);

	const updateBoardState = useCallback((row, column, XorO) => {
		setBoardState((currentBoardState) => {
			let newBoardState = [...currentBoardState];
			newBoardState[row][column] = XorO;
			return newBoardState;
		});

		setTurnCounter((currentTurnCount) => currentTurnCount + 1);
	}, []);

	const toggleModal = useCallback(() => {
		return modalActive ? setModalActive(false) : setModalActive(true);
	}, [modalActive]);

	const updateBoardSize = useCallback(
		(numRows, numColumns) => {
			setRows(numRows);
			setColumns(numColumns);
			resetBoardState(null, numRows, numColumns);
		},
		[resetBoardState]
	);

	// Check for winner when board state changes
	useEffect(() => {
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
			if (rowWinner === 'X' || columnWinner === 'X' || diagonalWinner === 'X') {
				setPlayer1WinCount((currentWinCount) => currentWinCount + 1);
			} else {
				setPlayer2WinCount((currentWinCount) => currentWinCount + 1);
			}
		}
	}, [boardState, columns, lengthReqForWin, rows]);

	return (
		<>
			<CssReset />
			<AppContainer>
				<Header title='React-Tac-Toe' />
				<StyledApp>
					<Menu
						gameComplete={gameComplete}
						resetBoardState={resetBoardState}
						showSettings={toggleModal}
						player1Wins={player1WinCount}
						player2Wins={player2WinCount}
					/>
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
				{modalActive && (
					<Modal
						closeSettings={toggleModal}
						setBoardSize={updateBoardSize}
						setConsecutiveToWin={setLengthReqForWin}
					/>
				)}
			</AppContainer>
		</>
	);
};

export default App;
