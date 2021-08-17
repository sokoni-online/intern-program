import React from 'react';
import Navigation from './components/Navigation.js';
import Login from './components/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/Register.js';
function App() {
	return (
		<Router>
			<div  className="App">
				<Navigation />
				<Switch>
					<Route path="/login" exact component={Login} />
					<Route path="/" exact component={Home} />
					<Route path="/Register" exact component={SignUp} />
				</Switch>
			</div>
		</Router>
	);
}
const Home = () => {
	return (
		<div>
			<h1>WELCOME HOME</h1>
		</div>
	);
};
export default App;
