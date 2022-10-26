import { Routes, Route } from 'react-router-dom';
import { Auth, Todos } from '../pages/index';

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Auth />} />
			<Route path="/todos" element={<Todos />} />
		</Routes>
	);
}

export default Router;
