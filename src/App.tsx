import { ThemeProvider } from 'styled-components';
import Route from '../src/route';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<Route />
		</ThemeProvider>
	);
}

export default App;
