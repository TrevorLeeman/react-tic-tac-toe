import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 2em 3em;
	border-radius: 1em;
	border: 0;
	cursor: pointer;

	background: #51a3b8;
	font-size: 20px;
	color: white;
	border-radius: 7px;
	box-shadow: 0 7px 0px #387796;
	display: inline-block;
	transition: all 0.2s;
	position: relative;
	padding: 20px 25px;
	position: relative;
	top: 0;

	&:active {
		top: 3px;
		box-shadow: 0 2px 0px #387796;
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
