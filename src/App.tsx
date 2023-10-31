import img from './assets/images/illustration-sign-up-desktop.svg';

const App = () => {
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
				<div className='flex flex-col'>
					<label className='font-bold'>Email Address</label>
					<input type='email' placeholder='email@company.com' className='border rounded-lg border-gray p-3 mt-2 mb-6' />
					<button className='bg-midnight text-white rounded-lg p-3 font-bold'>Subscribe to monthly newsletter</button>
				</div>
			</div>
			<div>
				<img src={img} />
			</div>
		</div>
	);
};

export default App;
