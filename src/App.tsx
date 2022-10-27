import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth, Todo } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Auth />} />
				<Route path="/todo" element={<Todo />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
