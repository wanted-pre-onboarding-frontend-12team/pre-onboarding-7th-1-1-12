import styled from 'styled-components';

export const AuthWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;
export const AuthBox = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 250px;
	height: 300px;
	padding-bottom: 20px;
	border: 1px solid ${({ theme }) => theme.lightGray};
	border-radius: 12px;
`;

export const AuthTitle = styled.h1`
	font-size: 24px;
	font-weight: 500;
`;

export const IdInput = styled.input`
	width: 180px;
	height: 30px;
	padding: 0 10px;
	border: none;
	border: 1px solid ${({ theme }) => theme.lightGray};
	border-radius: 4px;
`;

export const PwInput = styled(IdInput)``;

export const AuthBtn = styled.button`
	width: 200px;
	height: 35px;
	background-color: ${({ theme }) => theme.green};
	border: none;
	border-radius: 4px;
	color: white;
	font-weight: bold;
	&:disabled {
		background-color: ${({ theme }) => theme.lightGreen};
	}
`;
export const ChangeAuthBtn = styled.div`
	font-size: 13px;
	font-weight: bold;
	color: ${({ theme }) => theme.darkGreen};
	cursor: pointer;
`;
