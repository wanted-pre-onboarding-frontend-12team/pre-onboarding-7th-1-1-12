import { PATH } from '../constants/api';
import { api } from './requester';

export const signin = async (email: string, password: string) => {
	const {
		auth: { auth, signin },
	} = PATH;
	const data = { email, password };
	const res = await api.post(`${auth}${signin}`, data);
	return res;
};

export const signup = async (email: string, password: string) => {
	const {
		auth: { auth, signup },
	} = PATH;
	const data = { email, password };
	const res = await api.post(`${auth}${signup}`, data);
	return res;
};
