import { HeaderLayout } from './styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const isLogged = localStorage.getItem('accessToken');
	const Logout = () => {
		localStorage.removeItem('accessToken');
		navigate('/');
	};

	return (
		<HeaderLayout>
			<h3>투두 리스트</h3>
			{isLogged && (
				<button className="logoutBtn" onClick={Logout}>
					로그아웃
				</button>
			)}
		</HeaderLayout>
	);
};

export default Header;
