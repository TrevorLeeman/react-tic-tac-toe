import styled from 'styled-components';

const CircleSVG = styled.svg`
	transition: all 0.5s ease;
	border-radius: 50%;

	&:hover {
		box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
			0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
	}
`;

export default CircleSVG;
