import { useRouter } from 'next/router';
import React from 'react';

const Button = (props) => {
	const router = useRouter();

	return (
		<button
			className={`bg-primary-darker px-4 py-2 m-0 ml-5 text-white transition duration-300 hover:bg-primary-dark hover:rounded-ss-md hover:rounded-ee-md ${props.className}`}
			onClick={() => {
				router.push(props.href);
			}}
		>
			{props.children}
		</button>
	);
};

export default Button;
