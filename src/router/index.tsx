import { Routes, Route } from 'react-router-dom';
import { Auth, Todo } from '../pages';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Auth />} />
			<Route path="/todo" element={<Todo />} />
		</Routes>
	);
};

export default Router;
