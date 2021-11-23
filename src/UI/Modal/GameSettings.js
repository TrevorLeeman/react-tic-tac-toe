import styled from 'styled-components';
import MiniGrid from './MiniGrid/MiniGrid';

const GameSettingsWrapper = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 2rem 2rem 3rem;
	gap: 2rem;
	overflow: auto;
	width: 100%;
	scroll-snap-type: both mandatory;

	@media (min-width: 800px) and (max-width: 1440px) {
		grid-template-columns: 1fr;
	}
`;

const ModeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.1s ease-out;

	@media (min-width: 400px) {
		&:hover {
			transform: scale(1.1);
			transition: 0.1s ease-in;
		}
	}
`;

const GameSettings = ({ setBoardSize, setNumToWin, closeModal }) => {
	const updateGridSize = (numRows, numColumns, numToWin) => {
		setBoardSize(numRows, numColumns);
		setNumToWin(numToWin);
		closeModal();
	};

	return (
		<GameSettingsWrapper>
			<ModeWrapper onClick={() => updateGridSize(3, 3, 3)}>
				<h3>3x3</h3>
				<p>Win: 3 in a row</p>
				<MiniGrid rows={3} columns={3} />
			</ModeWrapper>
			<ModeWrapper onClick={() => updateGridSize(4, 4, 4)}>
				<h3>4x4</h3>
				<p>Win: 4 in a row</p>
				<MiniGrid rows={4} columns={4} />
			</ModeWrapper>
			<ModeWrapper onClick={() => updateGridSize(5, 5, 4)}>
				<h3>5x5</h3>
				<p>Win: 4 in a row</p>

				<MiniGrid rows={5} columns={5} />
			</ModeWrapper>
		</GameSettingsWrapper>
	);
};

export default GameSettings;
