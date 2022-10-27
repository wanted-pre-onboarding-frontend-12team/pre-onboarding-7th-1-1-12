import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import Todos from './pages/Todos';

function App() {
	const isLogged: boolean = Boolean(localStorage.getItem('accessToken'));
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={isLogged ? <Navigate to="/todo" /> : <Auth />} />
					<Route path="/todo" element={<Todos />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
