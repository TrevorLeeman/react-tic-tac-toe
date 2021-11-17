import styled from 'styled-components';
import SocialList from './SocialList';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 1em;
	width: 100%;
	background-color: white;
	padding: 1em;
	background-color: #ffffffe6;
	box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
		0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2);

	@media (max-width: 420px) {
		min-height: 10em;
		padding: 2em;
	} ;
`;

const StyledAppTitle = styled.h1`
	vertical-align: middle;
	/* font-family: 'Anton', sans-serif; */
	font-family: 'Saira Condensed', sans-serif;
	font-size: 3em;
	font-weight: 700;
	letter-spacing: 2pt;
`;

const Header = ({ title, className }) => {
	return (
		<StyledHeader className={className}>
			<StyledAppTitle>{title}</StyledAppTitle>
			<SocialList />
		</StyledHeader>
	);
};

export default Header;
