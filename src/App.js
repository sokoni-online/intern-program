import React,{useState,useEffect} from 'react';
import Navigation from './components/Navigation.js';
import Login from './components/login';
import MobileControl from './components/Mobilecontrol.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/Register.js';
function App() {

	const [isToggle,setIsToggle] = useState(false);

	const toggler = () => {
		setIsToggle(!isToggle);
	};

	useEffect(() => {
		 const moveMenu=()=>{
			if(window.innerWidth>768 && isToggle){
				setIsToggle(false);		
			 }
		}
		window.addEventListener('resize', moveMenu);
		return () => {
			window.removeEventListener('resize', moveMenu);
		}
	 })
	return (
		<Router>
			<div  className="App">
				<Navigation toggler={toggler} />
				<MobileControl isToggle={isToggle} toggler={toggler} />
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
		<div className="text-black text-center place-items-center text-7xl">
			<h1>WELCOME HOME</h1>
		</div>
	);
};
export default App;
