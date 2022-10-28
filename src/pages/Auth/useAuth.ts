import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { signin, signup } from '../../apis/auth';
import { UserAuthRequestDto } from '../../types/auth';
import { getLocalStorageItem, KEYS, setLocalStorageItem } from '../../utils/storage';
import { API_ERROR_MESSAGE } from '../../constants/error';

const useAuth = () => {
	const navigator = useNavigate();
	const [mode, setMode] = useState<'signin' | 'signup'>('signin');

	const onSignInFormSubmit = async (userAuthRequestBody: UserAuthRequestDto) => {
		try {
			const accessToken = await signin(userAuthRequestBody);
			setLocalStorageItem(KEYS.WANTED_ACCESS_TOKEN, accessToken);
			navigator('/todo');
		} catch (error) {
			if (error instanceof AxiosError && error.response?.data.message === API_ERROR_MESSAGE.signin.notEnrolledMember) {
				alert('존재하지 않는 계정입니다.');
			}
			if (error instanceof AxiosError && error.response?.data.message === API_ERROR_MESSAGE.signin.unauthorized) {
				alert('비밀번호가 일치하지 않습니다.');
			}
		}
	};

	const onSignUpFormSubmit = async (userAuthRequestBody: UserAuthRequestDto) => {
		try {
			const accessToken = await signup(userAuthRequestBody);
			setLocalStorageItem(KEYS.WANTED_ACCESS_TOKEN, accessToken);
			navigator('/todo');
		} catch (error) {
			if (error instanceof AxiosError && error.response?.data.message === API_ERROR_MESSAGE.signup)
				alert('이미 존재하는 계정입니다.');
		}
	};

	useEffect(() => {
		if (getLocalStorageItem(KEYS.WANTED_ACCESS_TOKEN)) {
			navigator('/todo');
		}
	}, []);

	return { mode, setMode, onSignInFormSubmit, onSignUpFormSubmit };
};

export default useAuth;
