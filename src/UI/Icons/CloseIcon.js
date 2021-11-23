import styled from 'styled-components';

const StyledSVG = styled.svg`
	transition: 200ms ease-out;
	width: 3rem;
	height: 3rem;
	cursor: pointer;

	path {
		stroke: grey;
		stroke-width: 2;
	}

	&:hover {
		path {
			stroke: #7051b8;
		}
	}
`;

const CloseIcon = ({ clickHandler }) => {
	return (
		<StyledSVG
			onClick={clickHandler}
			width='24'
			height='24'
			fill='none'
			viewBox='0 0 24 24'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M17.25 6.75L6.75 17.25'
			/>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M6.75 6.75L17.25 17.25'
			/>
		</StyledSVG>
	);
};

export default CloseIcon;
