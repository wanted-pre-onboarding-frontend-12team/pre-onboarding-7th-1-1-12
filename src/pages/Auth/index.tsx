import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignDiv } from './styled';
import { authApi } from '../../apis/auth';
import { AxiosError, AxiosResponse } from 'axios';
import useInput from './useInput';
import Footer from '../../components/feature/footer';

const Auth = () => {
	const navigate = useNavigate();
	const emailCheck = (value: string) => value.includes('@');
	const maxLen = (value: string) => value.length >= 8;
	const equalCheck = (value: string) => value === (passwordRef.current && passwordRef.current.value);
	const email = useInput('email', emailCheck);
	const password = useInput('password', maxLen);
	const passwordConfirm = useInput('passwordConfirm', equalCheck);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [signup, setSignup] = useState<boolean>(false);

	const onSign = async (e: React.FormEvent<HTMLElement>) => {
		e.preventDefault();
		let res: AxiosResponse;
		if (email.value && password.value) {
			try {
				res = signup ? await authApi.signUp(email.value, password.value) : await authApi.signIn(email.value, password.value);
				localStorage.setItem('accessToken', res.data.access_token);
				navigate('/todo');
			} catch (err) {
				const e = err as AxiosError;
				if (e.isAxiosError) {
					alert(e.message);
				} else {
					alert('에러 발생: ' + err);
				}
			}
		}
	};

	return (
		<SignDiv>
			{!signup ? <p>로그인</p> : <p>회원가입</p>}
			<form>
				<section>
					<label htmlFor="email">이메일</label>
					<input type="email" id="email" placeholder="wanted@naver.com" required value={email.value} onChange={email.onChange} />
					<span>{email.valid ? '' : email.hint}</span>
				</section>
				<section>
					<label htmlFor="password">비밀번호</label>
					<input
						type="password"
						id="password"
						placeholder="8자 이상 입력해주세요"
						required
						value={password.value}
						onChange={password.onChange}
						ref={passwordRef}
					/>
					<span>{password.valid ? '' : password.hint}</span>
				</section>
				{signup && (
					<section>
						<label htmlFor="passwordConfirm">비밀번호 확인</label>
						<input
							type="password"
							id="passwordConfirm"
							placeholder="비밀번호 확인"
							required
							pattern={passwordRef?.current?.value}
							value={passwordConfirm.value}
							onChange={passwordConfirm.onChange}
						/>
						<span>{passwordConfirm.valid ? '' : passwordConfirm.hint}</span>
					</section>
				)}
				{!signup ? (
					<button disabled={!email.valid || !password.valid} onClick={onSign}>
						로그인
					</button>
				) : (
					<button disabled={!email.valid || !password.valid || !passwordConfirm.valid} onClick={onSign}>
						회원가입
					</button>
				)}
			</form>
			<Footer signup={signup} setSignup={setSignup} />
		</SignDiv>
	);
};

export default Auth;
