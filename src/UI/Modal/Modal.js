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
	background-color: #f7f7f7;
	overflow: auto;
	font-size: 2rem;
	max-height: 70vh;

	box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
		0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2),
		inset 0 4px 5px 0 rgba(255, 255, 255, 0.14),
		inset 0 1px 10px 0 rgba(255, 255, 255, 0.12),
		inset 0 2px 4px -1px rgba(255, 255, 255, 0.2);

	@media (min-width: 1440px) {
		padding: 2rem;
	}
`;

const TitleCloseWrap = styled.div`
	display: flex;
	justify-content: space-between;
	padding-left: 1rem;

	@media (min-width: 400px) {
		padding-left: 2rem;
	}
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
