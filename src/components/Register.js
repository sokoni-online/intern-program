import React, { useState, useEffect } from 'react';
import Button from './Buttons';
import validate from './validate';

function SignUp() {

	const [values,setValues] = useState({
		email: "",
		password: "",
		confirmPassword: ""
	});

	const [email,setEmail] = useState(() => {
		// getting stored value
		const saved = localStorage.getItem("email");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
	});
	const [confirmPassword, setConfirmPassword] = useState(() => {
		// getting stored value
		const savedConfirm = localStorage.getItem("confirmPassword");
		const initialValue = JSON.parse(savedConfirm);
		return initialValue || "";
	});
	const [password, setPassword] = useState(() => {
		// getting stored value
		const savedPassword = localStorage.getItem("password");
		const initialValue = JSON.parse(savedPassword);
		return initialValue || "";
	});

	//storing the inputs
	useEffect(() => {
		// storing input name
		localStorage.setItem("email", JSON.stringify(email));
		localStorage.setItem("password", JSON.stringify(password));
		localStorage.setItem("confirmPassword", JSON.stringify(confirmPassword));
	}, [email, password, confirmPassword]);

	const [errorMsg, setErrorMsg] = useState({});
	//prevent page reload
	const handleSubmit = e => {
		e.preventDefault();
		setErrorMsg(validate(values));
	};

	//handle change
	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		}
		);
	};
	return (
		<div>
			<div className="p-10 my-30 ">
				<h2 className="sign-up">SIGN UP BELOW</h2>
				<form action="" onSubmit={handleSubmit}>
					<div className="flex justify-center ">
						<div className="lg:w-1/3 md:w-2/3 w-full">
							<br />
							<label className="label">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={values.email}
								onChange={handleChange}
								placeholder="Your Email"
								className="inputs"
							/>
							{errorMsg.email && <p className="error-message">{errorMsg.email}</p>}
							<label className="label">
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								value={values.password}
								placeholder="Password"
								onChange={handleChange}
								className="inputs"								
							/>
							{errorMsg.password && <p className="error-message">{errorMsg.password}</p>}
							<label className="label">
								Confirm Password
							</label>
							<input
								type="password"
								id="password1"
								name="confirmPassword"
								value={values.confirmPassword}
								placeholder="Confirm Password"
								onChange={handleChange}
								className="inputs"
							/>
							{errorMsg.confirmPassword && <p className="error-message">{errorMsg.confirmPassword}</p>}
							<Button
								value="Sign Up"
								styleClass="bg-blue-500
								hover:bg-gray-400 mt-2
								hover:text-white hover:shadow-xl
								w-full hover:border-blue-300 hover:border
								px-5 py-2 text-white grid-flow-row text-lg font-bold"
								id="btnSignUp"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
