import styled from 'styled-components';
import LinkedInIcon from './Icons/LinkedInIcon';
import GitHubIcon from './Icons/GitHubIcon';

const StyledSocialCard = styled.footer`
	ul {
		display: flex;
		gap: 1em;
		list-style: none;

		li {
			width: 3em;
			width: 3em;
			transition: all 0.5s ease;

			&:hover {
				transform: scale(1.1);
			}

			@media (max-width: 420px) {
				width: 5em;
				height: 5em;
			}

			svg {
				width: 100%;
			}
		}
	}
`;

const SocialCard = ({ className }) => {
	return (
		<StyledSocialCard className={className}>
			<ul>
				<li>
					<a
						href='https://github.com/TrevorLeeman'
						title='Trevor Leeman on GitHub'
					>
						<GitHubIcon />
					</a>
				</li>
				<li>
					<a
						href='https://www.linkedin.com/in/trevor-leeman/'
						title='Trevor Leeman on LinkedIn'
					>
						<LinkedInIcon />
					</a>
				</li>
			</ul>
		</StyledSocialCard>
	);
};

export default SocialCard;
