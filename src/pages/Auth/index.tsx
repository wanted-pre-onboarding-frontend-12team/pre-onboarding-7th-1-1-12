import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignDiv } from './styled';
import { authApi } from '../../apis/auth';
import { AxiosError, AxiosResponse } from 'axios';
import useInput from '../../components/shared/useInput';

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

	const onSign = async (e: React.MouseEvent<HTMLElement>) => {
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
					console.log(e.message);
				} else {
					alert('에러 발생: ' + err);
					console.log(err);
				}
			}
		}
	};

	useEffect(() => {
		console.log(signup, '로그인 or 회원가입');
	}, [signup]);

	return (
		<SignDiv>
			{!signup ? <p>로그인</p> : <p>회원가입</p>}
			<form>
				<section>
					<label htmlFor="email">이메일</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="wanted@naver.com"
						required
						value={email.value}
						onChange={email.onChange}
					/>
					<span>{email.valid ? '' : email.hint}</span>
				</section>
				<section>
					<label>비밀번호</label>
					<input
						type="password"
						name="password"
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
						<input
							type="password"
							name="passwordConfirm"
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
				{!signup ? (
					<div className="btnDiv">
						<p>회원이 아니신가요?</p>
						<button onClick={() => setSignup(true)}>회원가입</button>
					</div>
				) : (
					<div className="btnDiv">
						<button onClick={() => setSignup(false)}>로그인</button>
					</div>
				)}
			</form>
		</SignDiv>
	);
};

export default Auth;
