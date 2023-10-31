import React from 'react';
import { useForm } from 'react-hook-form';
import img from '../assets/images/illustration-sign-up-desktop.svg';
import { cn } from '../utils';
import Button from './Button';

interface IHomeProps {
	submit: (data: unknown) => void;
}

type Inputs = {
	email: string;
};

const Home: React.FC<IHomeProps> = ({ submit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	return (
		<div className='bg-white m-auto justify-between mt-28 w-2/3 flex rounded-[2.5rem] p-5 items-center text'>
			<div className='p-12'>
				<div>
					<p className='text-6xl mb-6 font-bold'>Stay Updated!</p>
					<p className='w-[90%]'>Join 60,000+ product managers receiving monthly updates on:</p>
				</div>
				<div className='my-6'>
					<ul className='custom-list'>
						<li>Product discovery and building what matters</li>
						<li>Measuring to ensure updates are a success</li>
						<li>And much more!</li>
					</ul>
				</div>
				<form onSubmit={handleSubmit(submit)}>
					<div className='flex flex-col'>
						<div className='flex justify-between'>
							<label className='font-bold'>Email Address</label>
							{errors.email && <p className='font-bold text-err1'>{errors.email.message}</p>}
						</div>
						<input
							placeholder='email@company.com'
							className={cn('border rounded-lg p-3 mt-2 mb-6 focus:border-black focus:outline-none', {
								'border-err1 focus:border-err1 bg-err2 text-err1 placeholder:text-err1': errors.email,
								'border-gray': !errors.email,
							})}
							{...register('email', {
								required: 'Valid Email Required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: 'Valid Email Required',
								},
							})}
						/>
						<Button text='Subscribe to monthly newsletter' type='submit' />
					</div>
				</form>
			</div>
			<div>
				<img src={img} alt='Illustration' />
			</div>
		</div>
	);
};

export default Home;
