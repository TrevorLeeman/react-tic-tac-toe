import styled from 'styled-components';

const StyledGridCell = styled.div`
	background-color: #000000cc;
	border-radius: 1rem;
	box-shadow: inset 0 4px 5px 0 rgba(0, 0, 0, 0.14),
		inset 0 1px 10px 0 rgba(0, 0, 0, 0.12),
		inset 0 2px 4px -1px rgba(0, 0, 0, 0.2);

	@media (min-width: 400px) {
		border-radius: 0.6rem;
	}
`;

const GridCell = () => {
	return <StyledGridCell />;
};

export default GridCell;
