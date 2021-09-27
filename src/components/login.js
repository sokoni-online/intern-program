import React, { useState } from 'react';
import Button from './Buttons';
import { Link, withRouter,useHistory} from 'react-router-dom';
import ValidateLog from './loginValidate';



function Login(props) {
	const [values, setValues] = useState({
		email: '',
		password: ''
	});

	const [errorMsg, setErrorMsg] = useState({});
	const savedEmail = localStorage.getItem('email');
	const savedPassword = localStorage.getItem('password');
	const nameEmail = values.email;
	const namePassword = values.password;
	const [logged, setLogged] = useState(false);
	const [logMessage, setLogMessage] = useState("");
	const history = useHistory();
	
	const signIn =()=> {
		const initialValueEmail = JSON.parse(savedEmail);
		const initialValue = JSON.parse(savedPassword);

		if (initialValueEmail === nameEmail && initialValue === namePassword) {
			setLogged(!logged);
			history.push('/');
			setLogMessage("Login Success Full");
		} else {
			setLogged(false);
			setLogMessage("Incorrect Email Or Password");
		}
		return logged;
	}

	//prevent page reload
	const handleSubmit = (e) => {
		e.preventDefault();
		setErrorMsg(ValidateLog(values));
		signIn();
		clearState();
	};
	//handle change
	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};
	//to hold  empty fields
	const initialState = {
		email: '',
		password: ''
	};
	//this calls the initialstate and set each value to empty
	const clearState = () => {
		setValues({
			...initialState
		});
	};

	return (

		<div className="p-10 my-30">
			<h2 className="text-center text-3xl text-blue-400 "> SIGN IN </h2>
			<h2 className="text-center text-3xl text-blue-400 "> {logMessage} </h2>
			<form onSubmit={handleSubmit}>
				<div className="flex justify-center">
					<div className="lg:w-1/3 md:w-2/3 w-full">
						<br />
						<label className="label">Email </label>
						<input
							type="email"
							id="email"
							name="email"
							value={nameEmail}
							placeholder="Your Email"
							onChange={handleChange}
							className="inputs"
						/>
						{errorMsg.email && <p className="error-message"> {errorMsg.email}</p>}
						<label className="label">Password </label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Password"
							value={namePassword}
							onChange={handleChange}
							className="inputs"
						/>
						{errorMsg.email && <p className="error-message"> {errorMsg.password} </p>}
						<Button
							value="Sign In"
							styleClass="bg-blue-500
								hover:bg-gray-400 mt-2
								hover:text-white hover:shadow-xl
								w-full hover:border-blue-300 hover:border
								px-5 py-2 text-white grid-flow-row text-lg font-bold"
							id="btnSignin"
						/>
						<Link
							to="/Register"
							className="p-4 text-blue text-blue-400 tracking-normal flex justify-center"
						>
							Have No Account ? Signup here
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
}
export default withRouter(Login);