import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { requestSignIn, requestSignUp } from '../../apis';
import useInput from '../shared/useInput';

export default function AuthForm({ isSignIn, setIsSignIn }) {
	const passwordRef = useRef<HTMLInputElement>(null);
	const emailCheck = (value: string) => value.includes('@');
	const maxLen = (value: string) => value.length >= 8;
	const equalCheck = (value: string) => value === (passwordRef.current && passwordRef.current.value);
	const email = useInput('email', emailCheck);
	const password = useInput('password', maxLen);
	const passwordConfirm = useInput('passwordConfirm', equalCheck);
	const navigate = useNavigate();

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (isSignIn) {
			const response = await requestSignIn({ email: email.value, password: password.value });
			if (response.status === 200) {
				alert('로그인 완료!');
			}
		} else {
			const response = await requestSignUp({ email: email.value, password: password.value });
			if (response.status === 201) {
				alert('회원가입 완료!');
			}
		}
	};

	return (
		<section>
			<form onSubmit={onSubmit}>
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
						minLength={8}
						required
						value={password.value}
						onChange={password.onChange}
						ref={passwordRef}
					/>
					<span>{password.valid ? '' : password.hint}</span>
				</section>
				{!isSignIn && (
					<section>
						<input
							type="password"
							name="passwordConfirm"
							id="passwordConfirm"
							placeholder="비밀번호 확인"
							minLength={8}
							required
							pattern={passwordRef?.current?.value}
							value={passwordConfirm.value}
							onChange={passwordConfirm.onChange}
						/>
						<span>{passwordConfirm.valid ? '' : passwordConfirm.hint}</span>
					</section>
				)}
				<button type="submit" disabled={!email.valid || !password.valid || (!isSignIn && !passwordConfirm.valid)}>
					{isSignIn && '로그인'}
					{!isSignIn && '회원가입'}
				</button>
			</form>
		</section>
	);
}
