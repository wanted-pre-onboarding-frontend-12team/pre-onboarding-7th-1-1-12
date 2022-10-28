import * as styled from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
	${reset}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
