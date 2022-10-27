import axios from 'axios';

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
	const accessToken = localStorage.getItem('accessToken');
	if (accessToken && config.headers) {
		config.headers.authorization = 'Bearer ' + accessToken;
	}
	return config;
});
