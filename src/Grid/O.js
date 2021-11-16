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
	border: solid white 1.5em;
	border-radius: 80%;
	transform: translate(-50%, -50%);
`;

const O = () => {
	return (
		<StyledO>
			<Outline />
		</StyledO>
	);
};

export default O;
