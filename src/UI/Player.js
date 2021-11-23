import { useState } from 'react';
import styled from 'styled-components';

const StyledPlayer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: fit-content;
	font-size: 1.5rem;
`;

const Score = styled.div`
	font-size: 3rem;
`;

const checkInputLength = (event) => {
	if (event.target.innerText.length <= 12 && event.key !== 'Enter') {
		return true;
	} else {
		event.preventDefault();
		return false;
	}
};

const Player = ({ name }) => {
	const [playerName, setPlayerName] = useState(name);

	const updatePlayerName = (event) => {
		setPlayerName(event.target.innerText);
	};

	return (
		<StyledPlayer>
			<h2
				onKeyPress={checkInputLength}
				onBlur={updatePlayerName}
				contentEditable='true'
				suppressContentEditableWarning={true}
			>
				{playerName}
			</h2>
			<Score>0</Score>
		</StyledPlayer>
	);
};

export default Player;
