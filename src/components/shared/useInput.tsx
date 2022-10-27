import { useState } from 'react';

import { HINT_LIST } from '../../constants/hint';

export default function useInput(type: 'email' | 'password' | 'passwordConfirm', validator: Function) {
	const [value, setValue] = useState('');
	const [hint, setHint] = useState('');
	const [valid, setValid] = useState(false);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value },
		} = event;

		if (typeof validator === 'function') {
			let validCheck = validator(value);
			setValid(validCheck);
		}
		if (!valid) {
			setHint(HINT_LIST[type]);
		}
		setValue(value);
	};

	return {
		value,
		onChange,
		hint,
		valid,
	};
}
