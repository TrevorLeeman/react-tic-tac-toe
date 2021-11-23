import styled from 'styled-components';
import Player from './Player';

const PlayerInfoWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	background-color: #ffffffbf;
	padding: 1rem;
	border-radius: 1rem 1rem 0 0;
`;

const PlayerInfo = () => {
	return (
		<PlayerInfoWrapper>
			<Player name='Player 1' />
			<Player name='Player 2' />
		</PlayerInfoWrapper>
	);
};

export default PlayerInfo;
