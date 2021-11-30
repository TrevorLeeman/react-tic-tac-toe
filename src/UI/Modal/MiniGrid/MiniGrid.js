import styled from 'styled-components';
import GridCell from './MiniGridCell';

const StyledGrid = styled.div`
	width: 200px;
	height: 200px;
	background-color: #7051b8e6;
	padding: 1.25rem;
	border-radius: 1rem;
	box-shadow: inset 0 4px 5px 0 rgba(255, 255, 255, 0.14),
		inset 0 1px 10px 0 rgba(255, 255, 255, 0.12),
		inset 0 2px 4px -1px rgba(255, 255, 255, 0.2);

	display: grid;
	grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
	grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
	grid-gap: ${(props) =>
		(props.rows === 3 && '0.8rem') ||
		(props.rows === 5 && '0.6rem') ||
		(props.rows === 7 && '0.5rem')};

	scroll-snap-align: center;

	@media (min-width: 400px) {
		width: 300px;
		height: 300px;
	}

	@media (min-width: 600px) {
		padding: 0.8rem;
	}
`;

const createGridCells = (rows, columns) => {
	let gridCells = [];

	for (let row = 0; row < rows; row++) {
		for (let column = 0; column < columns; column++) {
			gridCells.push(<GridCell key={[row, column]} rows={rows} />);
		}
	}

	return gridCells;
};

const MiniGrid = ({ rows, columns }) => {
	return (
		<StyledGrid className='styledGrid' rows={rows} columns={columns}>
			{createGridCells(rows, columns)}
		</StyledGrid>
	);
};

export default MiniGrid;
