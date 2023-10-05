import { useRouter } from 'next/router';
import React from 'react';

const Button = (props) => {
	const router = useRouter();

	return (
		<button
			className={`bg-dark px-4 py-2 m-0 ml-5 text-white hover:bg-primary-light hover:rounded-ss-xl hover:rounded-ee-xl border-2 border-transparent transition-all duration-300 ${props.className}`}
			onClick={() => {
				router.push(props.href);
			}}
		>
			{props.children}
		</button>
	);
};

export default Button;
