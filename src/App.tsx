import Home from './components/Home';
import Submit from './components/Submit';
import { useAppContext } from './context/appContextProvider';

const App = () => {
	const { submit } = useAppContext();

	return !submit ? <Home /> : <Submit />;
};

export default App;
