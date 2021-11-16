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
	width: 1.5em;
	border-radius: 0.3em;
	background-color: white;
`;

const XBar1 = styled(XBar)`
	transform: translate(-50%, -50%) rotate(45deg);
`;

const XBar2 = styled(XBar)`
	transform: translate(-50%, -50%) rotate(-45deg);
`;

const X = () => {
	return (
		<StyledX>
			<XBar1 />
			<XBar2 />
		</StyledX>
	);
};

export default X;
