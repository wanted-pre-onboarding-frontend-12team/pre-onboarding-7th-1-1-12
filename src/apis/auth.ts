import { PATH, POST } from '../constants/api';
import { UserAuthRequestDto, UserAuthResponseDto } from '../types/auth';
import { requester } from './requester';

export const signin = async (userAuthRequestBody: UserAuthRequestDto) => {
	const {
		auth: { index, signin },
	} = PATH;

	const { data } = await requester<UserAuthResponseDto>({
		method: POST,
		url: `${index}${signin}`,
		data: userAuthRequestBody,
	});

	return data.access_token;
};

export const signup = async (userAuthRequestBody: UserAuthRequestDto) => {
	const {
		auth: { index, signup },
	} = PATH;

	const { data } = await requester<UserAuthResponseDto>({
		method: POST,
		url: `${index}${signup}`,
		data: userAuthRequestBody,
	});

	return data.access_token;
};
