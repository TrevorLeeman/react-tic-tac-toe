import styled from 'styled-components';

const StyledX = styled.div`
	height: 100%;
	position: relative;
`;

const XBar = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	height: 80%;
	width: 0.8rem;
	border-radius: 0.3rem;
	background-color: white;
	box-shadow: 0 12px 17px 2px rgba(255, 255, 255, 0.14),
		0 5px 22px 4px rgba(255, 255, 255, 0.12),
		0 7px 8px -4px rgba(255, 255, 255, 0.2);

	@media (min-width: 800px) and (min-height: 800px) {
		width: 1.5rem;
	}
`;

const XBar1 = styled(XBar)`
	transform: translate(-50%, -50%) rotate(45deg);
`;

const XBar2 = styled(XBar)`
	transform: translate(-50%, -50%) rotate(-45deg);
`;

const X = ({ className }) => {
	return (
		<StyledX className={className}>
			<XBar1 />
			<XBar2 />
		</StyledX>
	);
};

export default X;