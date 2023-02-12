import { Route, Switch, Redirect } from 'react-router-dom';
import StudentCard from './components/StudentCard';
import CreateCard from './components/CreateCard';
import style from './style.scss';

function App() {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={StudentCard} />
				<Route path="/CreateCard" component={CreateCard} />
				<Redirect to="/StudentCard" />
			</Switch>
		</div>
	);
}

export default App;
