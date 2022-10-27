import { api } from './requester';

export const authApi = {
	signIn(email: string, password: string) {
		const data = { email, password };
		return api.post('/auth/signin', data);
	},
	signUp(email: string, password: string) {
		const data = { email, password };
		return api.post('/auth/signup', data);
	},
};
