import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignDiv } from './styled';

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

	const onSign = () => {};

	return (
		<SignDiv>
			<p>로그인</p>
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
				{
					!signup ? (
						<div className="btnDiv">
							<p>회원이 아니신가요?</p>
							<button onClick={() => setSignup(true)}>회원가입</button>
						</div>
					) : (
						<div className="btnDiv">
							<p>이미 아이디가 있나요?</p>
							<button onClick={() => setSignup(false)}>로그인</button>
						</div>
					)
					//FIXME: 리렌더링 문제로 회원가입 버튼을 눌러도 로그인 상황으로 돌아오는 것 같음.
				}
			</form>
		</SignDiv>
	);
};

export default Auth;
