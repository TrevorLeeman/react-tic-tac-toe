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
	border-radius: 0.3rem;
	background-color: white;
	box-shadow: 0 12px 17px 2px rgba(255, 255, 255, 0.14),
		0 5px 22px 4px rgba(255, 255, 255, 0.12),
		0 7px 8px -4px rgba(255, 255, 255, 0.2);

	width: ${(props) =>
		(props.gridRows === 3 && '1.5rem') ||
		(props.gridRows === 5 && '1.15rem') ||
		(props.gridRows === 7 && '0.8rem')};
`;

const XBar1 = styled(XBar)`
	transform: translate(-50%, -50%) rotate(45deg);
`;

const XBar2 = styled(XBar)`
	transform: translate(-50%, -50%) rotate(-45deg);
`;

const X = ({ className, gridRows }) => {
	return (
		<StyledX className={className}>
			<XBar1 gridRows={gridRows} />
			<XBar2 gridRows={gridRows} />
		</StyledX>
	);
};

export default X;
