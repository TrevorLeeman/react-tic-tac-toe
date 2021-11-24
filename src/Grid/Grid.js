import styled, { keyframes } from 'styled-components';
import GridCell from './GridCell';

const flipAnimation = keyframes`
	0% {
		-webkit-transform: rotateY(0);
		transform: rotateY(0);
	}
	100% {
		-webkit-transform: rotateY(180deg);
		transform: rotateY(180deg);
	}
`;

const StyledGrid = styled.div`
	grid-area: grid;

	min-width: 300px;
	min-height: 300px;
	max-width: 70vh;
	max-height: 70vh;

	background-color: #ffffff80;
	padding: 1.25rem;
	border-radius: 1rem;
	box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
		0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2),
		inset 0 4px 5px 0 rgba(255, 255, 255, 0.14),
		inset 0 1px 10px 0 rgba(255, 255, 255, 0.12),
		inset 0 2px 4px -1px rgba(255, 255, 255, 0.2);

	display: grid;
	grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
	grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
	grid-gap: 0.8rem;

	align-self: start;

	/* animation: ${flipAnimation} 1s cubic-bezier(0.455, 0.03, 0.515, 0.955) both; */

	@media (min-width: 300px) {
		width: 90vw;
		height: 90vw;
	}

	@media (min-width: 800px) and (min-height: 800px) {
		grid-gap: 1.25rem;
		padding: 2rem;
		width: 80vw;
		height: 80vw;
	}
`;

const createGridCells = (
	rows,
	columns,
	boardState,
	turnCounter,
	gameComplete,
	setSelected
) => {
	let gridCells = [];

	for (let row = 0; row < rows; row++) {
		for (let column = 0; column < columns; column++) {
			const occupied = boardState[row][column] === '' ? false : true;
			const output = occupied && boardState[row][column];

			gridCells.push(
				<GridCell
					key={[row, column]}
					row={row}
					column={column}
					turnCounter={turnCounter}
					occupied={occupied}
					output={output}
					gameComplete={gameComplete}
					setSelected={setSelected}
				/>
			);
		}
	}

	return gridCells;
};

const Grid = ({
	rows,
	columns,
	boardState,
	turnCounter,
	gameComplete,
	updateBoardState,
}) => {
	const setSelected = (row, column, XorO) =>
		updateBoardState(row, column, XorO);

	return (
		<StyledGrid rows={rows} columns={columns}>
			{createGridCells(
				rows,
				columns,
				boardState,
				turnCounter,
				gameComplete,
				setSelected
			)}
		</StyledGrid>
	);
};

export default Grid;
