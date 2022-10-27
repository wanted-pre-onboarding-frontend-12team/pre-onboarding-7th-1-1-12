import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		fontSizes: {
			title: string;
			subTitle: string;
			paragraph: string;
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
	}
}
