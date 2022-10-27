import { Navigate, Route, Routes } from 'react-router-dom';
import { Auth, Todos } from '../pages';

const Router = () => {
	const isLogged: boolean = Boolean(localStorage.getItem('accessToken'));

	return (
		<Routes>
			<Route path="/" element={isLogged ? <Navigate to="/todo" /> : <Auth />} />
			<Route path="/todo" element={<Todos />} />
		</Routes>
	);
};

export default Router;
