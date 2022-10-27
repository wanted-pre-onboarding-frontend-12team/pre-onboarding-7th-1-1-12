import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignDiv } from './styled';
import { authApi } from '../../apis/auth';
import { AxiosError, AxiosResponse } from 'axios';

const Auth = () => {
	const navigate = useNavigate();
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const passwordCheckRef = useRef<HTMLInputElement>(null);
	const [signup, setSignup] = useState<boolean>(false);
	const [isValid, setIsValid] = useState<boolean>(false);

	const validateValue = () => {
		if (!signup && emailRef.current && passwordRef.current) {
			if (emailRef.current.value.includes('@') && passwordRef.current.value.length >= 8) {
				setIsValid(true);
				return true;
			}
		} else if (signup && emailRef.current && passwordRef.current && passwordCheckRef.current) {
			if (
				emailRef.current.value.includes('@') &&
				passwordRef.current.value.length >= 8 &&
				passwordRef.current.value === passwordCheckRef.current.value
			) {
				setIsValid(true);
				return true;
			}
		}
		setIsValid(false);
		return false;
	};

	const onSign = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		let res: AxiosResponse;
		if (emailRef.current && passwordRef.current) {
			try {
				res = signup
					? await authApi.signUp(emailRef.current.value, passwordRef.current.value)
					: await authApi.signIn(emailRef.current.value, passwordRef.current.value);
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
				<p>이메일</p>
				<input type="text" placeholder="이메일을 입력해주세요" ref={emailRef} onChange={validateValue} />
				<p>비밀번호</p>
				<input type="password" placeholder="비밀번호를 입력해주세요" ref={passwordRef} onChange={validateValue} />
				{signup ? (
					<div>
						<p>비밀번호 확인</p>
						<input
							type="password"
							placeholder="비밀번호를 다시 한번 입력해주세요"
							ref={passwordCheckRef}
							onChange={validateValue}
						/>
					</div>
				) : null}
				{!signup ? (
					<button disabled={!isValid} onClick={onSign}>
						로그인
					</button>
				) : (
					<button disabled={!isValid} onClick={onSign}>
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
