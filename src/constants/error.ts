export const AUTH_INPUT_ERROR_MESSAGE = {
	email: "이메일에 '@'을 포함해야 합니다.",
	password: '비밀번호는 8자 이상 입력해야 합니다.',
};

export const API_ERROR_MESSAGE = {
	signin: {
		unauthorized: 'Unauthorized',
		notEnrolledMember: '해당 사용자가 존재하지 않습니다.',
	},
	signup: {
		existingMember: '동일한 이메일이 이미 존재합니다.',
	},
};
