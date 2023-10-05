import { useRouter } from 'next/router';
import React from 'react';

const Button = (props) => {
	const router = useRouter();

	return (
		<button
			className={`bg-dark px-4 py-2 m-0 ml-5 text-white transition duration-300 hover:bg-primary-dark hover:rounded-ss-xl hover:rounded-ee-xl border-2 border-transparent ${props.className}`}
			onClick={() => {
				router.push(props.href);
			}}
		>
			{props.children}
		</button>
	);
};

export default Button;
