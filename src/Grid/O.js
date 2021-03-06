import styled from 'styled-components';

const StyledO = styled.div`
	height: 100%;
	position: relative;
`;

const Outline = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	height: 80%;
	width: 80%;
	border: solid white 0.8rem;
	border-width: ${(props) =>
		(props.gridRows === 3 && '1.5rem') ||
		(props.gridRows === 5 && '1.1rem') ||
		(props.gridRows === 7 && '0.8rem')};
	border-radius: 80%;
	transform: translate(-50%, -50%);
	box-shadow: 0 12px 17px 2px rgba(255, 255, 255, 0.14),
		0 5px 22px 4px rgba(255, 255, 255, 0.12),
		0 7px 8px -4px rgba(255, 255, 255, 0.2);
`;

const O = ({ className, gridRows }) => {
	return (
		<StyledO className={className}>
			<Outline gridRows={gridRows} />
		</StyledO>
	);
};

export default O;
