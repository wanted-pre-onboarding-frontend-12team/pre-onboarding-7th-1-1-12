import styled from 'styled-components';

type FlexBoxProps = {
	flexDirection?: 'row' | 'column';
	alignItem?: 'normal' | 'strech' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'baseline';
	justifyContent?:
		| 'normal'
		| 'strech'
		| 'center'
		| 'start'
		| 'end'
		| 'flex-start'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
};

export const FlexBox = styled.div<FlexBoxProps>`
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection && flexDirection};
	align-items: ${({ alignItem }) => alignItem && alignItem};
	justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
`;

export default FlexBox;
