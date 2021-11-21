import styled from 'styled-components';
import SocialList from './SocialList';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;
	width: 100%;
	background-color: white;
	padding: 2rem;
	background-color: #ffffffe6;
	box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
		0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2);

	@media (min-width: 420px) {
		padding: 1rem;
		min-height: unset;
	}
`;

const StyledAppTitle = styled.h1`
	vertical-align: middle;
	font-size: 3rem;
	font-family: 'Anton', sans-serif;
	font-weight: 700;
	letter-spacing: 2pt;
`;

const Header = ({ title }) => {
	return (
		<StyledHeader>
			<StyledAppTitle>{title}</StyledAppTitle>
			<SocialList />
		</StyledHeader>
	);
};

export default Header;
