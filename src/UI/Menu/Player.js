import { useState } from 'react';
import styled from 'styled-components';

const StyledPlayer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: fit-content;
	font-size: 1.5rem;
	padding: 1rem;
	border: 2px solid transparent;
	transition: all 200ms ease-out;

	${(props) => props.turnActive && 'border-color: purple; border-radius: 1rem;'}
	${(props) => props.win && 'background-color: green; border-radius: 1rem;'}
`;

const StyledPlayerName = styled.h2``;

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

const Player = ({ name, score, turnActive, win }) => {
	console.log(win);
	const [playerName, setPlayerName] = useState(name);

	const updatePlayerName = (event) => {
		setPlayerName(event.target.innerText);
	};

	return (
		<StyledPlayer turnActive={turnActive} win={win}>
			<StyledPlayerName
				onKeyPress={checkInputLength}
				onBlur={updatePlayerName}
				contentEditable='true'
				suppressContentEditableWarning={true}
			>
				{playerName}
			</StyledPlayerName>
			<Score>{score}</Score>
		</StyledPlayer>
	);
};

export default Player;
