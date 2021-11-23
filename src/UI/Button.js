import styled from 'styled-components';

const StyledButton = styled.button`
	position: relative;
	top: 0;
	display: inline-block;
	border: 0;
	padding: 1rem 2rem;
	border-radius: 1rem;
	cursor: pointer;

	background-color: #7051b8;
	color: white;
	box-shadow: 0 1rem 0 #553795;

	font-size: 2rem;
	font-family: 'Saira Condensed', sans-serif;
	font-weight: 700;
	letter-spacing: 2pt;
	white-space: nowrap;
	margin-bottom: 1rem;

	transition: all 0.2s;

	&:hover {
		top: 0.1rem;
		box-shadow: 0 0.9rem 0px #553795;
		transition: all 0.2s;
	}

	&:active {
		top: 1rem;
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
