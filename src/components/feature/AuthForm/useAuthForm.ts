import { useState } from 'react';
import { UserAuthForm, UserAuthRequestDto } from '../../../types/auth';

type Props = {
	onAuthFormSubmit: (userAuthRequestBody: UserAuthRequestDto) => void;
};

const useAuthForm = (props: Props) => {
	const [userAuthForm, setUserAuthForm] = useState<UserAuthForm>({
		email: { value: '', isNotValidate: true },
		password: { value: '', isNotValidate: true },
	});

	const userAuthFormValidation = (userInfoForm: UserAuthForm) => {
		const { email, password } = userInfoForm;

		if (email.value.includes('@') && password.value.length >= 8) {
			setUserAuthForm({ email: { ...email, isNotValidate: false }, password: { ...password, isNotValidate: false } });
		} else if (!email.value.includes('@') && password.value.length >= 8) {
			setUserAuthForm({ email: { ...email, isNotValidate: true }, password: { ...password, isNotValidate: false } });
		} else if (email.value.includes('@') && password.value.length < 8) {
			setUserAuthForm({ email: { ...email, isNotValidate: false }, password: { ...password, isNotValidate: true } });
		} else if (!email.value.includes('@') && password.value.length < 8) {
			setUserAuthForm({ email: { ...email, isNotValidate: true }, password: { ...password, isNotValidate: true } });
		}
	};

	const onAuthFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!(event.currentTarget instanceof HTMLInputElement)) return;

		const { name, value } = event.currentTarget;

		if (name === 'email') {
			const newUserAuthForm = { ...userAuthForm, [name]: { value, isNotValidate: userAuthForm.email.isNotValidate } };
			setUserAuthForm(newUserAuthForm);
			userAuthFormValidation(newUserAuthForm);
		}
		if (name === 'password') {
			const newUserInfoForm = {
				...userAuthForm,
				[name]: { value, isNotValidate: userAuthForm.password.isNotValidate },
			};
			setUserAuthForm(newUserInfoForm);
			userAuthFormValidation(newUserInfoForm);
		}
	};

	const onAuthFormSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		props.onAuthFormSubmit({ email: userAuthForm.email.value, password: userAuthForm.password.value });
	};

	return { userAuthForm, onAuthFormChange, onAuthFormSubmitClick };
};

export default useAuthForm;
