import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	padding: 0 2em;
`;

export const TodoList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.1em;
	max-height: 77vh;
	margin-top: 0.5em;
	overflow: scroll;
`;
