import { FooterLayout } from './styled';

interface Footer {
	signup: boolean;
	setSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer = ({ signup, setSignup }: Footer) => {
	return (
		<FooterLayout>
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
		</FooterLayout>
	);
};

export default Footer;
