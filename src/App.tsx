import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Auth />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
