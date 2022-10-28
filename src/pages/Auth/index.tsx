import * as S from './styled';
import { Layout, AuthForm } from '../../components';
import useAuth from './useAuth';

const Auth = () => {
	const { mode, setMode, onSignInFormSubmit, onSignUpFormSubmit } = useAuth();

	return (
		<Layout>
			<S.Container>
				<S.InnerContainer>
					<S.ModeButtonWrapper>
						<S.ModeButton type="button" active={mode === 'signin'} onClick={() => setMode('signin')}>
							로그인
						</S.ModeButton>
						<S.ModeButton type="button" active={mode === 'signup'} onClick={() => setMode('signup')}>
							회원가입
						</S.ModeButton>
					</S.ModeButtonWrapper>
					{mode === 'signin' && <AuthForm mode={mode} onAuthFormSubmit={onSignInFormSubmit} />}
					{mode === 'signup' && <AuthForm mode={mode} onAuthFormSubmit={onSignUpFormSubmit} />}
				</S.InnerContainer>
			</S.Container>
		</Layout>
	);
};

export default Auth;
