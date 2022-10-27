import { ThemeProvider } from 'styled-components';

import Theme from './styles/Theme';
import Router from './route';

function App() {
	const isLogged: boolean = Boolean(localStorage.getItem('accessToken'));

	return (
		<ThemeProvider theme={Theme}>
			<Router />
		</ThemeProvider>
	);
}

export default App;
