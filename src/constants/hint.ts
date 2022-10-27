interface Hints {
	email: string;
	password: string;
	passwordConfirm: string;
}

// export const HINT_TYPE = 'email' | 'password' | 'passwordConfirm';

export const HINT_LIST: Hints = {
	email: '@를 꼭 입력해주세요.',
	password: '8자리 이상 입력해주세요.',
	passwordConfirm: '비밀번호가 일치하지 않습니다.',
};
