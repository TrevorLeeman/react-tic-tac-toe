import styled from 'styled-components';
import X from './X';
import O from './O';

const StyledGridCell = styled.div`
	background-color: #000000cc;
	cursor: pointer;
	border-radius: 1em;
	box-shadow: inset 0 4px 5px 0 rgba(0, 0, 0, 0.14),
		inset 0 1px 10px 0 rgba(0, 0, 0, 0.12),
		inset 0 2px 4px -1px rgba(0, 0, 0, 0.2);
`;

const hoverCell = () => {};

const GridCell = ({
	row,
	column,
	turnCounter,
	occupied,
	output,
	setSelected,
}) => {
	const cellSelected = () => {
		if (occupied === false) {
			let XorO = turnCounter % 2 ? 'X' : 'O';
			setSelected(row, column, XorO);
		}
	};

	return (
		<StyledGridCell onClick={cellSelected} onMouseEnter={hoverCell}>
			{(output === 'X' && <X />) || (output === 'O' && <O />)}
		</StyledGridCell>
	);
};

export default GridCell;
