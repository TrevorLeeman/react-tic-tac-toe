import styled from 'styled-components';
import MiniGrid from './MiniGrid/MiniGrid';

const GameSettingsWrapper = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding: 1rem 1rem 2rem;
	gap: 2rem;
	overflow: auto;
	width: 100%;
	scroll-snap-type: x mandatory;
	user-select: none;

	@media (min-width: 400px) {
		padding: 2rem 2rem 3rem;
	}

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

			.styledGrid {
				box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
					0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2),
					inset 0 4px 5px 0 rgba(255, 255, 255, 0.14),
					inset 0 1px 10px 0 rgba(255, 255, 255, 0.12),
					inset 0 2px 4px -1px rgba(255, 255, 255, 0.2);
			}
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
			<ModeWrapper onClick={() => updateGridSize(5, 5, 4)}>
				<h3>5x5</h3>
				<p>Win: 4 in a row</p>
				<MiniGrid rows={5} columns={5} />
			</ModeWrapper>
			<ModeWrapper onClick={() => updateGridSize(7, 7, 5)}>
				<h3>7x7</h3>
				<p>Win: 5 in a row</p>

				<MiniGrid rows={7} columns={7} />
			</ModeWrapper>
		</GameSettingsWrapper>
	);
};

export default GameSettings;
