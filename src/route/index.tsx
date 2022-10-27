import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Auth from '../pages/Auth';
import Todo from '../pages/Todo';

const Router = () => {
	let jwt = localStorage.getItem('JWT') ? true : false;
	const [token, setToken] = useState(jwt);

	return (
		<Routes>
			<Route path="/" element={token ? <Navigate replace to="/todo" /> : <Auth />} />
			<Route path="/todo" element={token ? <Todo /> : <Navigate replace to="/" />} />
		</Routes>
	);
};

export default Router;
