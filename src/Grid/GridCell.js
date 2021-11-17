import { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import X from './X';
import O from './O';

const StyledGridCell = styled.div`
	position: relative;
	background-color: #000000cc;
	border-radius: 1em;
	box-shadow: inset 0 4px 5px 0 rgba(0, 0, 0, 0.14),
		inset 0 1px 10px 0 rgba(0, 0, 0, 0.12),
		inset 0 2px 4px -1px rgba(0, 0, 0, 0.2);
`;

const HoverArea = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	background-color: transparent;
	width: 70%;
	height: 70%;
	transform: translate(-50%, -50%);
	z-index: 1;
	cursor: pointer;
`;

const GridCell = ({
	row,
	column,
	turnCounter,
	occupied,
	output,
	gameComplete,
	setSelected,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [XorO, setXorO] = useState('X');

	const cellSelected = useCallback(() => {
		if (occupied === false && gameComplete === false) {
			setSelected(row, column, XorO);
		}
	}, [XorO, column, gameComplete, occupied, row, setSelected]);

	const hoverCell = useCallback((event) => {
		if (event.type === 'mouseenter') {
			setIsHovered(true);
		} else if (event.type === 'mouseleave') {
			setIsHovered(false);
		}
	}, []);

	useEffect(() => {
		setXorO(turnCounter % 2 ? 'X' : 'O');
	}, [turnCounter]);

	return (
		<StyledGridCell>
			<HoverArea
				onClick={cellSelected}
				onMouseEnter={hoverCell}
				onMouseLeave={hoverCell}
			/>
			{(output === 'X' && <X />) ||
				(output === 'O' && <O />) ||
				(isHovered && XorO === 'X' && gameComplete === false && <X />) ||
				(isHovered && XorO === 'O' && gameComplete === false && <O />)}
		</StyledGridCell>
	);
};

export default GridCell;
