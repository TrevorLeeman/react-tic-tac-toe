import styled from 'styled-components';

const StyledButton = styled.button`
	position: relative;
	top: 0;
	display: inline-block;
	border: 0;
	padding: 1em 2em;
	border-radius: 0.4em;
	cursor: pointer;

	background: #7051b8;
	color: white;
	box-shadow: 0 0.4em 0px #553795;

	font-size: 2em;
	font-family: 'Saira Condensed', sans-serif;
	font-weight: 700;
	letter-spacing: 2pt;

	transition: all 0.2s;

	&:active {
		top: 0.4em;
		box-shadow: 0 2px 0px #553795;
		transition: all 0.2s;
	}
`;

const Button = ({ children, className, clickHandler }) => {
	return (
		<StyledButton className={className} onClick={clickHandler}>
			{children}
		</StyledButton>
	);
};

export default Button;
