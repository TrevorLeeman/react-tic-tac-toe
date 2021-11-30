import { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import X from './X';
import O from './O';

const StyledGridCell = styled.div`
	position: relative;
	background-color: #000000cc;
	border-radius: ${(props) =>
		(props.gridRows === 3 && '1rem') ||
		(props.gridRows === 5 && '0.8rem') ||
		(props.gridRows === 7 && '0.6rem')};

	box-shadow: inset 0 4px 5px 0 rgba(0, 0, 0, 0.14),
		inset 0 1px 10px 0 rgba(0, 0, 0, 0.12),
		inset 0 2px 4px -1px rgba(0, 0, 0, 0.2);
`;

const HoverArea = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	background-color: transparent;
	width: 75%;
	height: 75%;
	transform: translate(-50%, -50%);
	z-index: 1;
	cursor: pointer;
`;

const HoverX = styled(X)`
	opacity: 0.75;

	div {
		box-shadow: unset;
	}
`;

const HoverO = styled(O)`
	opacity: 0.75;

	div {
		box-shadow: unset;
	}
`;

const GridCell = ({
	row,
	column,
	turnCounter,
	occupied,
	output,
	gameComplete,
	setSelected,
	gridRows,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [XorO, setXorO] = useState('X');

	const cellSelected = useCallback(
		(event) => {
			if (
				event.type === 'click' ||
				event.code === 'Enter' ||
				event.code === 'Space'
			) {
				if (occupied === false && gameComplete === false) {
					setSelected(row, column, XorO);
				}
			}
		},
		[XorO, column, gameComplete, occupied, row, setSelected]
	);

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
		<StyledGridCell gridRows={gridRows}>
			<HoverArea
				onClick={cellSelected}
				onKeyPress={cellSelected}
				onMouseEnter={hoverCell}
				onMouseLeave={hoverCell}
				tabIndex='0'
			/>
			{(output === 'X' && <X gridRows={gridRows} />) ||
				(output === 'O' && <O gridRows={gridRows} />) ||
				(isHovered && XorO === 'X' && gameComplete === false && (
					<HoverX gridRows={gridRows} />
				)) ||
				(isHovered && XorO === 'O' && gameComplete === false && (
					<HoverO gridRows={gridRows} />
				))}
		</StyledGridCell>
	);
};

export default GridCell;
