import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

const Auth = () => {
	const [changeSign, setChangeSign] = useState(false);
	const [signInValue, setSignInValue] = useState({ id: '', pw: '', rePw: '' });
	const navigate = useNavigate();
	const idValid: boolean = signInValue.id.includes('@');
	const pwValid: boolean = signInValue.pw.length >= 8;
	const rePwValid: boolean = signInValue.pw === signInValue.rePw;
	const signInValid: boolean = idValid && pwValid;
	const signUpValid: boolean = idValid && pwValid && rePwValid;

	const signInHandle = (e: any) => {
		const { value, name } = e.target;
		setSignInValue({ ...signInValue, [name]: value });
	};

	const signUpCertify = (e: any) => {
		e.preventDefault();
		fetch(`${import.meta.env.VITE_BASE_URL}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: signInValue.id, password: signInValue.pw }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.access_token) {
					alert('✅ 회원가입 성공');
					setChangeSign(false);
				} else {
					alert('❌ 회원가입 실패');
				}
			});
	};

	const signInCertify = (e: any) => {
		e.preventDefault();
		fetch(`${import.meta.env.VITE_BASE_URL}/auth/signin`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: signInValue.id, password: signInValue.pw }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.access_token) {
					localStorage.setItem('TOKEN', data.access_token);
					alert('✅ 로그인 성공');
					navigate('/todo');
				} else {
					alert('❌ 로그인 실패');
				}
			});
	};

	useEffect(() => {
		if (localStorage.getItem('TOKEN')) {
			navigate('/todo');
			alert('✅ 자동 로그인되었습니다.');
		}
		return;
	}, [navigate]);

	return (
		<S.AuthWrap>
			<S.AuthBox onSubmit={changeSign ? signUpCertify : signInCertify}>
				<S.AuthTitle>{changeSign ? '회원가입' : '로그인'}</S.AuthTitle>
				<S.IdInput name="id" type="email" onChange={signInHandle} placeholder="이메일" />
				<S.PwInput name="pw" type="password" onChange={signInHandle} placeholder="비밀번호 (8자 이상)" />
				{changeSign && <S.PwInput name="rePw" type="password" onChange={signInHandle} placeholder="비밀번호 확인" />}
				<S.AuthBtn disabled={changeSign ? !signUpValid : !signInValid}>{changeSign ? '회원가입' : '로그인'}</S.AuthBtn>
				<S.ChangeAuthBtn onClick={() => setChangeSign(!changeSign)}>
					{changeSign ? '로그인' : '회원가입'} 하러가기
				</S.ChangeAuthBtn>
			</S.AuthBox>
		</S.AuthWrap>
	);
};

export default Auth;
