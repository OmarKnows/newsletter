import React from 'react';

interface IButtonProps {
	text: string;
	type: string;
}

const Button: React.FC<IButtonProps> = ({ text }) => {
	return (
		<button
			type='submit'
			className='bg-midnight text-white rounded-lg p-3 duration-300 ease-in-out font-bold hover:bg-gradient-to-r from-grad1 to-grad2 transition '
		>
			{text}
		</button>
	);
};

export default Button;
