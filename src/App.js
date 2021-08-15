import React from 'react';
import Navigation from './components/Navigation.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div  className="App">
				<Navigation />
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" component={Home} />
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
