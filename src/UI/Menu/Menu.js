import styled from 'styled-components';
import PlayerInfo from './PlayerInfo';
import Button from '../Button';
import GearIcon from '../Icons/GearIcon';

const PlayerInfoControlsWrapper = styled.aside`
	grid-area: controls;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #ffffff80;
	border-radius: 1rem;
	box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
		0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2),
		inset 0 4px 5px 0 rgba(255, 255, 255, 0.14),
		inset 0 1px 10px 0 rgba(255, 255, 255, 0.12),
		inset 0 2px 4px -1px rgba(255, 255, 255, 0.2);

	@media (min-width: 1440px) {
		align-self: start;
		justify-self: end;
	}
`;

const Controls = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;

const StyledResetButton = styled(Button)`
	min-width: 18rem;

	@media (min-height: 800px) {
		padding: 2rem 3rem;
	}
`;

const StyledSettingsButton = styled(Button)`
	padding: 0.5rem 1rem 0;
	height: fit-content;
`;

const Menu = ({
	gameComplete,
	resetBoardState,
	showSettings,
	player1Wins,
	player2Wins,
	turnCounter,
	player1Win,
	player2Win,
}) => {
	return (
		<PlayerInfoControlsWrapper>
			<PlayerInfo
				player1Wins={player1Wins}
				player2Wins={player2Wins}
				turnCounter={turnCounter}
				player1Win={player1Win}
				player2Win={player2Win}
			/>
			<Controls>
				<StyledResetButton clickHandler={resetBoardState}>
					{gameComplete ? 'New Game' : 'Reset Game'}
				</StyledResetButton>
				<StyledSettingsButton clickHandler={showSettings}>
					<GearIcon />
				</StyledSettingsButton>
			</Controls>
		</PlayerInfoControlsWrapper>
	);
};

export default Menu;
