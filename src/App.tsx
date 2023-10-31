import { useState } from 'react';
import Home from './components/Home';
import Submit from './components/Submit';

const App = () => {
	const [submit, setSubmit] = useState(false);
	const handleSubmit = (data: unknown) => {
		console.log(data);
		setSubmit(!submit);
	};
	return !submit ? <Home submit={handleSubmit} /> : <Submit />;
};

export default App;
