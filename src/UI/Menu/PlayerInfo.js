import styled from 'styled-components';
import Player from './Player';

const PlayerInfoWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	background-color: #ffffffbf;
	padding: 1rem;
	border-radius: 1rem 1rem 0 0;
`;

const PlayerInfo = ({ player1Wins, player2Wins }) => {
	return (
		<PlayerInfoWrapper>
			<Player name='Player 1' score={player1Wins} />
			<Player name='Player 2' score={player2Wins} />
		</PlayerInfoWrapper>
	);
};

export default PlayerInfo;
