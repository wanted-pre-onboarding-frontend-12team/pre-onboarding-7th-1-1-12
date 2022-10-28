import * as S from './styled';
import { InputWrapper, InputLabel, InputErrorMessage } from '../../shared/Input/styled';
import { Input, Button } from '../../../components';
import { AUTH_INPUT_ERROR_MESSAGE } from '../../../constants/error';
import { UserAuthRequestDto } from '../../../types/auth';
import useAuthForm from './useAuthForm';

type Props = {
	mode: 'signin' | 'signup';
	onAuthFormSubmit: (userAuthRequestBody: UserAuthRequestDto) => void;
};

const AuthForm = (props: Props) => {
	const { userAuthForm, onAuthFormChange, onAuthFormSubmitClick } = useAuthForm({
		onAuthFormSubmit: props.onAuthFormSubmit,
	});

	return (
		<S.Container onSubmit={onAuthFormSubmitClick}>
			<InputWrapper margin="0 0 1em 0">
				<InputLabel>이메일</InputLabel>
				<Input
					id="email"
					type="text"
					placeholder="이메일을 입력해주세요."
					name="email"
					value={userAuthForm.email.value}
					onChange={onAuthFormChange}
				/>
				{userAuthForm.email.isNotValidate && <InputErrorMessage>{AUTH_INPUT_ERROR_MESSAGE.email}</InputErrorMessage>}
			</InputWrapper>
			<InputWrapper margin="0 0 3em 0">
				<InputLabel>비밀번호</InputLabel>
				<Input
					id="password"
					type="password"
					placeholder="비밀번호를 입력해주세요."
					name="password"
					value={userAuthForm.password.value}
					onChange={onAuthFormChange}
				/>
				{userAuthForm.password.isNotValidate && <InputErrorMessage>{AUTH_INPUT_ERROR_MESSAGE.password}</InputErrorMessage>}
			</InputWrapper>

			<Button type="submit" disabled={userAuthForm.email.isNotValidate || userAuthForm.password.isNotValidate}>
				{props.mode === 'signin' ? '로그인' : '회원가입'}
			</Button>
		</S.Container>
	);
};

export default AuthForm;
