import React, { useEffect, useState } from 'react';

import AuthForm from '../../components/feature/AuthForm';
import Footer from '../../components/shared/Footer';
import usePath from '../../components/shared/usePath';

export default function Auth() {
	const [isSignIn, setIsSignIn] = useState(true);
	usePath();
	return (
		<section className="container">
			<AuthForm isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
			<Footer isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
		</section>
	);
}
