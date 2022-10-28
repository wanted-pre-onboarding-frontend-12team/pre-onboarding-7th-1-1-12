import styled from 'styled-components';

export const Container = styled.form`
	${({ theme }) => theme.layout.flexColumn};
	flex: 1;
	padding: 1.5em;
`;
