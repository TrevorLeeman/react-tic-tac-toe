import styled from 'styled-components';

const GameSettingsWrapper = styled.form`
	width: 10rem;
	max-width: 100%;
`;

const GameSettings = ({ setBoardSize }) => {
	const updateGridSize = (numRows, numColumns) => {
		setBoardSize(numRows, numColumns);
	};

	return (
		<GameSettingsWrapper>
			<h2>Grid Size</h2>
			<label>
				<input
					type='radio'
					name='grid-size'
					onClick={() => updateGridSize(3, 3)}
				/>
				<span>3x3</span>
			</label>

			<label>
				<input
					type='radio'
					name='grid-size'
					onClick={() => updateGridSize(4, 4)}
				/>
				<span>4x4</span>
			</label>

			<label>
				<input
					type='radio'
					name='grid-size'
					onClick={() => updateGridSize(5, 5)}
				/>
				<span>5x5</span>
			</label>
		</GameSettingsWrapper>
	);
};

export default GameSettings;
