import styled from 'styled-components';

const StyledFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;

	li {
		width: 75px;
		height: 75px;
		line-height: 75px;
		margin: 0 10px;
		text-align: center;
		cursor: pointer;
		border-radius: 50%;
		border: 5px solid #d8e2dc;
		float: left;
		transition: all 0.5s ease;
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<ul>
				<li class='facebook'>
					<a href='https://'>
						<i class='fa fa-facebook fa-2x' aria-hidden='true'></i>
					</a>
				</li>
			</ul>
		</StyledFooter>
	);
};

export default Footer;
