import { API } from '../utils/api';
export const URLS = {
	LOGIN: `/auth/signin`,
	SIGN_UP: `/auth/signup`,
};

export const PostLogin = async (user: { email: string; password: string }) => {
	const userData = {
		email: user.email,
		password: user.password,
	};
	await API.post(URLS.LOGIN, userData).then((res) => {
		const { access_token } = res.data;
		localStorage.setItem('access_token', access_token);
		access_token ? window.location.replace('/todo') : window.location.replace('/');
	});
};
export const PostSignUp = async (user: { email: string; password: string }) => {
	const userData = {
		email: user.email,
		password: user.password,
	};
	await API.post(URLS.SIGN_UP, userData).then(() => {
		window.location.replace('/');
	});
};
