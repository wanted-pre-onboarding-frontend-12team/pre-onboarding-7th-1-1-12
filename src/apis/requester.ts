import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getLocalStorageItem, KEYS } from '../utils/storage';

const createAxiosInstance = () => {
	const base = axios.create({
		baseURL: import.meta.env.VITE_BASE_API_URL,
	});

	return base;
};

const axiosInstance = createAxiosInstance();

export async function requester<Payload>(option: AxiosRequestConfig) {
	const ACCESS_TOKEN = getLocalStorageItem(KEYS.WANTED_ACCESS_TOKEN);
	const response: AxiosResponse<Payload> = await axiosInstance(
		ACCESS_TOKEN
			? {
					headers: {
						Authorization: `Bearer ${ACCESS_TOKEN}`,
						'Content-Type': 'application/json',
					},
					...option,
			  }
			: {
					headers: {
						'Content-Type': 'application/json',
					},
					...option,
			  },
	);

	return {
		status: response.status,
		headers: response.headers,
		data: response.data,
	};
}
