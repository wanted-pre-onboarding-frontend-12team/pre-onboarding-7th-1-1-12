export type UserAuthRequestDto = {
	email: string;
	password: string;
};

export type UserAuthResponseDto = {
	access_token: string;
};

export type UserAuthForm = {
	email: {
		value: string;
		isNotValidate: boolean;
	};
	password: {
		value: string;
		isNotValidate: boolean;
	};
};
