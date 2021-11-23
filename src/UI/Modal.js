import styled from 'styled-components';
import GameSettings from './GameSettings';
import Button from './Button';

const ModalBackground = styled.div`
	z-index: 998;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

const PositionModal = styled.div`
	z-index: 999;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const StyledModal = styled.div`
	display: flex;
	background-color: white;
	padding: 1rem;
	border-radius: 1rem;
`;

const Modal = ({ closeSettings, setBoardSize }) => {
	const updateBoardSize = (numRows, numColumns) => {
		setBoardSize(numRows, numColumns);
	};

	return (
		<>
			<PositionModal>
				<StyledModal>
					<GameSettings setBoardSize={updateBoardSize} />
					<Button clickHandler={closeSettings}>Close</Button>
				</StyledModal>
			</PositionModal>
			<ModalBackground onClick={closeSettings} />
		</>
	);
};

export default Modal;
