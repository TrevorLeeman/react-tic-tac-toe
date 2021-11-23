import styled from 'styled-components';
import GameSettings from './GameSettings';
import CloseIcon from '../Icons/CloseIcon';

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
	flex-direction: column;
	padding: 1rem;
	border-radius: 1rem;
	max-width: 90vw;
	background-color: white;
	overflow: auto;
	font-size: 2rem;
	max-height: 70vh;
`;

const TitleCloseWrap = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Modal = ({ closeSettings, setBoardSize, setConsecutiveToWin }) => {
	return (
		<>
			<PositionModal>
				<StyledModal>
					<TitleCloseWrap>
						<h2>Select Mode</h2>
						<CloseIcon clickHandler={closeSettings} />
					</TitleCloseWrap>
					<GameSettings
						setBoardSize={setBoardSize}
						setNumToWin={setConsecutiveToWin}
						closeModal={closeSettings}
					/>
				</StyledModal>
			</PositionModal>
			<ModalBackground onClick={closeSettings} />
		</>
	);
};

export default Modal;
