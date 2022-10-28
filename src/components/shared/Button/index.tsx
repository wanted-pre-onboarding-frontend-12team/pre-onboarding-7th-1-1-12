import * as S from './styled';
import { PropsWithChildren } from 'react';

type Props = {
	type: 'button' | 'submit';
	disabled?: boolean;
	backgroundColor?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & PropsWithChildren;

const Button = ({ children, ...props }: Props) => {
	return <S.Button {...props}>{children}</S.Button>;
};

export default Button;
