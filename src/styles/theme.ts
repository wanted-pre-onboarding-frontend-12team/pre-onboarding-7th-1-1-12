import { DefaultTheme } from 'styled-components';

const pixelToRem = (size: number) => `${size / 16}rem`;

const theme: DefaultTheme = {
	fontSizes: {
		title: pixelToRem(60),
		subTitle: pixelToRem(30),
		paragraph: pixelToRem(18),
	},
	colors: {
		black: '#000000',
		white: '#FFFFFF',
		yellow: '#fbc531',
		red: '#e74c3c',
		green: '#44bd32',
		blue: '#3498db',
		primary: '#273c75',
	},
};

export default theme;
