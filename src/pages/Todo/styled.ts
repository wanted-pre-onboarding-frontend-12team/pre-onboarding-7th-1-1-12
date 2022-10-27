import styled from 'styled-components';

export const Wrapper = styled.section`
	padding: 2em;
	width: 360px;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		.title {
			font-size: 25px;
		}
	}

	button {
		color: #3cb043;
		border: 0;
		background: none;
	}
	button:hover {
		color: #32612d;
	}
`;
