import * as S from './styled';

type Props = {
	id?: string;
	type: 'text' | 'password';
	value?: string;
	name?: string;
	placeholder: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
	return <S.Input {...props} />;
};

export default Input;
