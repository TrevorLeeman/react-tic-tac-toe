import styled from 'styled-components';
import GridCell from './MiniGridCell';

const StyledGrid = styled.div`
	width: 300px;
	height: 300px;
	background-color: #7051b8e6;
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

	scroll-snap-align: center;

	@media (min-width: 600px) {
		grid-gap: 0.5rem;
		padding: 0.8rem;
	}
`;

const createGridCells = (rows, columns) => {
	let gridCells = [];

	for (let row = 0; row < rows; row++) {
		for (let column = 0; column < columns; column++) {
			gridCells.push(<GridCell key={[row, column]} />);
		}
	}

	return gridCells;
};

const MiniGrid = ({ rows, columns }) => {
	return (
		<StyledGrid rows={rows} columns={columns}>
			{createGridCells(rows, columns)}
		</StyledGrid>
	);
};

export default MiniGrid;
