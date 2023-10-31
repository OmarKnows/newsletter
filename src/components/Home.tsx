import React from 'react';
import { useForm } from 'react-hook-form';
import img from '../assets/images/illustration-sign-up-desktop.svg';
import { cn } from '../utils';
import { useAppContext } from '../context/appContextProvider';

type Inputs = {
	email: string;
};

const Home: React.FC = () => {
	const { setSubmit, setEmail } = useAppContext();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const submitHandler = (data: { email: string }) => {
		setEmail(data.email);
		setSubmit(true);
	};

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
				<form onSubmit={handleSubmit(submitHandler)}>
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
						<button
							type='submit'
							className='w-full bg-midnight text-white rounded-lg p-3 duration-300 ease-in-out font-bold hover:bg-gradient-to-r from-grad1 to-grad2 transition '
						>
							Subscribe to monthly newsletter
						</button>
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
