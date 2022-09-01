import { useState, useEffect, useCallback } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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

	background-image: linear-gradient(
			201deg,
			rgba(148, 148, 148, 0.07) 0%,
			rgba(148, 148, 148, 0.07) 50%,
			rgba(83, 83, 83, 0.07) 50%,
			rgba(83, 83, 83, 0.07) 100%
		),
		linear-gradient(
			192deg,
			rgba(176, 176, 176, 0.08) 0%,
			rgba(176, 176, 176, 0.08) 50%,
			rgba(180, 180, 180, 0.08) 50%,
			rgba(180, 180, 180, 0.08) 100%
		),
		linear-gradient(
			48deg,
			rgba(185, 185, 185, 0.1) 0%,
			rgba(185, 185, 185, 0.1) 50%,
			rgba(243, 243, 243, 0.1) 50%,
			rgba(243, 243, 243, 0.1) 100%
		),
		linear-gradient(
			65deg,
			rgba(172, 172, 172, 0.09) 0%,
			rgba(172, 172, 172, 0.09) 50%,
			rgba(209, 209, 209, 0.09) 50%,
			rgba(209, 209, 209, 0.09) 100%
		),
		linear-gradient(
			4deg,
			rgba(224, 224, 224, 0.03) 0%,
			rgba(224, 224, 224, 0.03) 50%,
			rgba(49, 49, 49, 0.03) 50%,
			rgba(49, 49, 49, 0.03) 100%
		),
		linear-gradient(
			228deg,
			rgba(152, 152, 152, 0.03) 0%,
			rgba(152, 152, 152, 0.03) 50%,
			rgba(130, 130, 130, 0.03) 50%,
			rgba(130, 130, 130, 0.03) 100%
		),
		linear-gradient(
			163deg,
			rgba(170, 170, 170, 0.08) 0%,
			rgba(170, 170, 170, 0.08) 50%,
			rgba(232, 232, 232, 0.08) 50%,
			rgba(232, 232, 232, 0.08) 100%
		),
		linear-gradient(
			152deg,
			rgba(12, 12, 12, 0.05) 0%,
			rgba(12, 12, 12, 0.05) 50%,
			rgba(161, 161, 161, 0.05) 50%,
			rgba(161, 161, 161, 0.05) 100%
		),
		linear-gradient(
			302deg,
			rgba(48, 48, 48, 0.1) 0%,
			rgba(48, 48, 48, 0.1) 50%,
			rgba(195, 195, 195, 0.1) 50%,
			rgba(195, 195, 195, 0.1) 100%
		),
		linear-gradient(90deg, rgb(144, 14, 253), rgb(74, 115, 255));
`;

const StyledApp = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;
	grid-template-columns: 1fr;
	grid-template-areas:
		'controls'
		'grid';
	gap: 2rem;
	place-items: center;
	padding: 2rem 1rem;
	flex-grow: 1;

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
	const [player1Win, setPlayer1Win] = useState(false);
	const [player2Win, setPlayer2Win] = useState(false);
	const [player1WinCount, setPlayer1WinCount] = useState(0);
	const [player2WinCount, setPlayer2WinCount] = useState(0);

	const resetBoardState = useCallback(
		(
			event,
			numRows = rows,
			numColumns = columns,
			incrementFirstTurn = gameComplete ? true : false
		) => {
			setBoardState(createInitialBoardState(numRows, numColumns));
			setGameComplete(false);
			setTurnCounter(firstTurn + 1);
			setFirstTurn((currentValue) => currentValue + 1);
			setPlayer1Win(false);
			setPlayer2Win(false);
		},
		[columns, firstTurn, gameComplete, rows]
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

		if (
			rowWin ||
			columnWin ||
			diagonalWin ||
			turnCounter - firstTurn === rows * columns
		) {
			setGameComplete(true);
			setTurnCounter((currentTurnCount) => currentTurnCount + 1);
			if (rowWinner === 'X' || columnWinner === 'X' || diagonalWinner === 'X') {
				setPlayer1Win(true);
				setPlayer1WinCount((currentWinCount) => currentWinCount + 1);
			} else if (
				rowWinner === 'O' ||
				columnWinner === 'O' ||
				diagonalWinner === 'O'
			) {
				setPlayer2Win(true);
				setPlayer2WinCount((currentWinCount) => currentWinCount + 1);
			}
		}
	}, [boardState]);

	return (
		<>
			<CssReset />
			<AppContainer>
				<StyledApp>
					<Menu
						gameComplete={gameComplete}
						resetBoardState={resetBoardState}
						showSettings={toggleModal}
						player1Wins={player1WinCount}
						player2Wins={player2WinCount}
						turnCounter={turnCounter}
						player1Win={player1Win}
						player2Win={player2Win}
					/>
					<Grid
						gridRows={rows}
						gridColumns={columns}
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
