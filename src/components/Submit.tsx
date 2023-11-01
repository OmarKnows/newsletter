import img from '../assets/images/icon-success.svg';
import { useAppContext } from '../context/appContextProvider';

const Submit = () => {
	const { setSubmit, email } = useAppContext();
	return (
		<div className='bg-white h-screen md:h-auto relative md:m-auto justify-between mt-40 md:w-1/3 rounded-[2.5rem] py-10 px-14 items-center text'>
			<img src={img} />
			<p className='text-6xl my-6 font-bold'>Thanks for subscribing!</p>
			<p className='mb-6'>
				A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to
				confirm your subscripton.
			</p>
			<button
				onClick={() => setSubmit(false)}
				className='w-full bg-midnight text-white rounded-lg p-3 duration-300 ease-in-out font-bold hover:bg-gradient-to-r from-grad1 to-grad2 transition '
			>
				Dismiss message
			</button>
		</div>
	);
};

export default Submit;
