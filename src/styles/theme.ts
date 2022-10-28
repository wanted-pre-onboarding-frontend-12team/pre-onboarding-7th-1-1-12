import { DefaultTheme } from 'styled-components';

const pixelToRem = (size: number) => `${size / 16}rem`;

const theme: DefaultTheme = {
	fontSizes: {
		small: pixelToRem(12),
		normal: pixelToRem(16),
		medium: pixelToRem(20),
		large: pixelToRem(24),
	},
	fontWeights: {
		light: 300,
		normal: 400,
		medium: 500,
		semiBold: 600,
		bold: 700,
		strongBold: 800,
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
	layout: {
		flexCenter: `
			display: flex;
   	 	justify-contents: center;
    	align-items: center;
		`,
		flexColumn: `
			display: flex;
    	flex-direction: column;
		`,
		flexCenterColumn: `
			display: flex;
    	flex-direction: column;
    	justify-contents: center;
    	align-items: center;
		`,
	},
};

export default theme;
