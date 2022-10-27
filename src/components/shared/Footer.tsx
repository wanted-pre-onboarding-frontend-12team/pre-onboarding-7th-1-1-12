export default function Footer({ isSignIn, setIsSignIn }) {
	return (
		<footer>
			{isSignIn ? (
				<section>
					<p>회원이 아니신가요?</p> <button onClick={(e) => setIsSignIn((prev) => !prev)}>회원가입</button>
				</section>
			) : (
				<button onClick={(e) => setIsSignIn((prev) => !prev)}>로그인하기</button>
			)}
		</footer>
	);
}
