import styled from 'styled-components';

const Square = styled.div`
	width: 200px;
	height: 200px;
	border: 2px solid black;
	background-color: ${props => (props.active ? '#d00' : 'green')};
`;

export { Square };
