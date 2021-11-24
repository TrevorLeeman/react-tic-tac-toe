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

const StyledPlayerName = styled.h2`
	text-decoration: solid underline transparent 0.3rem;
	transition: all 300ms ease-out;

	${(props) => props.turnActive && 'text-decoration-color: #7051b8'}
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

const Player = ({ name, score, turnActive }) => {
	const [playerName, setPlayerName] = useState(name);

	const updatePlayerName = (event) => {
		setPlayerName(event.target.innerText);
	};

	return (
		<StyledPlayer>
			<StyledPlayerName
				onKeyPress={checkInputLength}
				onBlur={updatePlayerName}
				contentEditable='true'
				suppressContentEditableWarning={true}
				turnActive={turnActive}
			>
				{playerName}
			</StyledPlayerName>
			<Score>{score}</Score>
		</StyledPlayer>
	);
};

export default Player;
