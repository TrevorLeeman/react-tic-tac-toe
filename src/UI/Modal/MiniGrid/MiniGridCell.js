import styled from 'styled-components';

const StyledGridCell = styled.div`
	background-color: #000000cc;
	box-shadow: inset 0 4px 5px 0 rgba(0, 0, 0, 0.14),
		inset 0 1px 10px 0 rgba(0, 0, 0, 0.12),
		inset 0 2px 4px -1px rgba(0, 0, 0, 0.2);

	border-radius: ${(props) =>
		(props.rows === 3 && '0.6rem') ||
		(props.rows === 5 && '0.5rem') ||
		(props.rows === 7 && '0.4rem')};
`;

const GridCell = ({ rows }) => {
	return <StyledGridCell rows={rows} />;
};

export default GridCell;
