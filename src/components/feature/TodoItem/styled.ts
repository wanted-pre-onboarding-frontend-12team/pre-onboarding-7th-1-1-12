import styled from 'styled-components';

export const Container = styled.li<{ isEditMode: boolean }>`
	display: flex;
	border: 1px solid ${({ theme }) => theme.colors.black};

	& > div:nth-of-type(1) {
		flex: ${({ isEditMode }) => (isEditMode ? 10 : 1)};
	}

	& > div:nth-of-type(2) {
		flex: ${({ isEditMode }) => (isEditMode ? 2 : 9)};
		margin-left: ${({ isEditMode }) => !isEditMode && '0.75em'};
	}

	& > div:nth-of-type(3) {
		flex: ${({ isEditMode }) => !isEditMode && 2};
	}
`;

export const TodoItemCompletedWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	& > button {
		flex: 1;
	}
`;

export const TodoItemContentWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

export const TodoItemButtonWrapper = styled.div`
	display: flex;

	& > button {
		flex: 1;
	}
`;
