import React, { useState, useEffect } from 'react';
import { Container, LoginForm, Formbox, InputGroup } from './styled';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Auth() {
	const URL = 'https://pre-onboarding-selection-task.shop';
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [emailMessage, setEmailMessage] = useState('');
	const [isEmail, setIsEmail] = useState(false);

	const [password, setPassword] = useState('');
	const [passwordMessage, setPasswordMessage] = useState('');
	const [isPassword, setIsPassword] = useState(false);

	const [isLoginForm, setIsLoginForm] = useState(true);
	const token = localStorage.getItem('token');

	useEffect(() => {
		if (!token) {
			navigate('/');
		} else navigate('/todos');
	}, []);

	const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		const emailRegex = /@+/g;
		if (!emailRegex.test(e.target.value)) {
			setEmailMessage('이메일 형식이 틀렸습니다. 올바르게 입력해주세요');
			setIsEmail(false);
		} else {
			setEmailMessage('올바른 형식입니다.');
			setIsEmail(true);
		}
	};

	const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		const message = e.target.value;
		setPassword(message);

		if (message.length >= 8) {
			setPasswordMessage('올바른 형식입니다.');
			setIsPassword(true);
		} else {
			setPasswordMessage('비밀번호는 8자 이상 입력해주세요');
			setIsPassword(false);
		}
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isLoginForm) {
			try {
				await axios
					.post(
						`${URL}/auth/signin`,
						{
							email: email,
							password: password,
						},
						{
							headers: {
								'Content-Type': 'application/json',
							},
						},
					)
					.then((res) => {
						if (res.status === 200) {
							navigate('/todos');
							localStorage.setItem('token', res.data['access_token']);
						}
					});
			} catch (err) {
				alert('아이디 혹은 비밀번호가 틀렸습니다.');
			}
		} else {
			try {
				await axios
					.post(
						`${URL}/auth/signup`,
						{
							email: email,
							password: password,
						},
						{
							headers: {
								'Content-Type': 'application/json',
							},
						},
					)
					.then((res) => {
						setIsLoginForm(true);
						setEmail('');
						setPassword('');
						alert('회원가입이 완료 되었습니다.');
					});
			} catch (err) {
				alert('이미 존재하는 아이디 입니다.');
			}
		}
	};

	return (
		<Container>
			<LoginForm onSubmit={onSubmit}>
				{isLoginForm ? <h1>로그인</h1> : <h1>회원 가입</h1>}
				<Formbox>
					<InputGroup placeholder="이메일을 입력해주세요." value={email} onChange={onChangeEmail} />
					{email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
				</Formbox>
				<Formbox>
					<InputGroup type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={onChangePassword} />
					{password.length > 0 && <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>}
				</Formbox>
				<button type="submit" disabled={!(isEmail && isPassword)}>
					{isLoginForm ? '로그인' : '회원가입'}
				</button>
				{isLoginForm ? (
					<span
						onClick={() => {
							setIsLoginForm(!isLoginForm);
							setEmail('');
							setPassword('');
						}}
					>
						회원가입
					</span>
				) : (
					<span
						onClick={() => {
							setIsLoginForm(!isLoginForm);
							setEmail('');
							setPassword('');
						}}
					>
						로그인
					</span>
				)}
			</LoginForm>
		</Container>
	);
}

export default Auth;
