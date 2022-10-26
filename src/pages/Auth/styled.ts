import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	width: 50%;
	max-width: 550px;
	height: 30%;
	border: 1px solid black;

	& > button {
		padding: 1rem;
		margin-top: 1rem;
	}

	> span {
		margin-top: 0.5rem;
		text-decoration: none;
		color: black;
		width: 100%;
		text-align: right;
		width: 100%;
		cursor: pointer;
	}
`;

export const Formbox = styled.div`
	.message {
		color: black;
		&.error {
			color: red;
		}
	}
`;

export const InputGroup = styled.input`
	display: flex;
	width: 100%;
	padding: 1rem 0;
	margin: 1rem 0;
	&::placeholder {
		font-size: 1rem;
	}
`;
