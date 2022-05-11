import styled from 'styled-components';

const StyledFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	position: sticky;
	top: 100vh;

	p {
		background-color: #000000cc;
		color: white;
		padding: 0.25rem 1rem;
		border-radius: 0.5rem 0.5rem 0 0;
		font-size: 1.5rem;

		a {
			text-decoration: none;
			color: inherit;

			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<p>
				©{' '}
				<a
					href="https://www.trevorleeman.com"
					title="Trevor Leeman's personal website"
				>
					Trevor Leeman
				</a>{' '}
				| 2021
			</p>
		</StyledFooter>
	);
};

export default Footer;
