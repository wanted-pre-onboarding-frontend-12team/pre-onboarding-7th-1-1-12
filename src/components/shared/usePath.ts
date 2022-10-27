import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../utils/localStorage';

const usePath = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = getToken();

		if (token) {
			navigate('/todo');
		} else {
			navigate('/');
		}
	}, [navigate]);
};

export default usePath;
