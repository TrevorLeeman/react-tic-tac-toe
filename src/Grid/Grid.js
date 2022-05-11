import styled from 'styled-components';
import GridCell from './GridCell';

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
	grid-template-rows: ${(props) => `repeat(${props.gridRows}, 1fr)`};
	grid-template-columns: ${(props) => `repeat(${props.gridColumns}, 1fr)`};

	grid-gap: ${(props) =>
		(props.gridRows === 3 && '1.2rem') ||
		(props.gridRows === 5 && '1rem') ||
		(props.gridRows === 7 && '0.8rem')};

	align-self: start;

	@media (min-width: 300px) {
		width: 90vw;
		height: 90vw;
	}

	@media (min-width: 800px) and (min-height: 800px) {
		padding: 2rem;
		width: 80vw;
		height: 80vw;
	}
`;

const createGridCells = (
	gridRows,
	gridColumns,
	boardState,
	turnCounter,
	gameComplete,
	setSelected
) => {
	let gridCells = [];

	for (let row = 0; row < gridRows; row++) {
		for (let column = 0; column < gridColumns; column++) {
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
					gridRows={gridRows}
				/>
			);
		}
	}

	return gridCells;
};

const Grid = ({
	gridRows,
	gridColumns,
	boardState,
	turnCounter,
	gameComplete,
	updateBoardState,
}) => {
	const setSelected = (row, column, XorO) =>
		updateBoardState(row, column, XorO);

	return (
		<StyledGrid gridRows={gridRows} gridColumns={gridColumns}>
			{createGridCells(
				gridRows,
				gridColumns,
				boardState,
				turnCounter,
				gameComplete,
				setSelected
			)}
		</StyledGrid>
	);
};

export default Grid;
