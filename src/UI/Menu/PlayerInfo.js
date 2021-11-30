import styled from 'styled-components';
import Player from './Player';

const PlayerInfoWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	background-color: #f7f7f7;
	padding: 1rem;
	border-radius: 1rem 1rem 0 0;
`;

const PlayerInfo = ({
	player1Wins,
	player2Wins,
	turnCounter,
	player1Win,
	player2Win,
}) => {
	return (
		<PlayerInfoWrapper>
			<Player
				name='Player (X)'
				score={player1Wins}
				turnActive={turnCounter % 2}
				win={player1Win}
			/>
			<Player
				name='Player (O)'
				score={player2Wins}
				turnActive={!(turnCounter % 2)}
				win={player2Win}
			/>
		</PlayerInfoWrapper>
	);
};

export default PlayerInfo;
