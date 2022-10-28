import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		fontSizes: {
			small: string;
			normal: string;
			medium: string;
			large: string;
		};
		fontWeights: {
			light: 300;
			normal: 400;
			medium: 500;
			semiBold: 600;
			bold: 700;
			strongBold: 800;
		};
		colors: {
			black: '#000000';
			white: '#FFFFFF';
			yellow: '#fbc531';
			red: '#e74c3c';
			green: '#44bd32';
			blue: '#3498db';
			primary: '#273c75';
		};
		layout: {
			flexCenter: string;
			flexColumn: string;
			flexCenterColumn: string;
		};
	}
}
