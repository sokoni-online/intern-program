import React, { useState, useEffect } from 'react';
import Button from './Buttons';
import validate from './validate';

function SignUp() {
	const [values, setValues] = useState({
		emails: "",
		password: "",
		confirmPassword: ""
	});
	const [email, setEmail] = useState(() => {
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

	//handling change
	const handleChange = e => {
		const { name, value } = e.target;
		setValues({
			...value,
			[name]: value
		}
		)
	};
	//storing the inputs
	useEffect(() => {
		// storing input name
		localStorage.setItem("email", JSON.stringify(email));
		localStorage.setItem("password", JSON.stringify(password));
		localStorage.setItem("confirmPassword", JSON.stringify(confirmPassword));
	}, [email, password, confirmPassword]);

	//prevent page reload
	const handleSubmit = e => {
		e.preventDefault();
		setErrorMsg(validate(values));
	};

	const [errorMsg, setErrorMsg] = useState({});

	return (
		<div>
			<div className="p-10 my-30 ">
				<h2 className="text-center text-3xl text-blue-400">SIGN UP BELOW</h2>
				<form action="">
					<div className="flex justify-center ">
						<div className="lg:w-1/3 md:w-2/3 w-full">
							<br />
							<label className=" my-3 block tracking-wide text-blue-400 text-base font-bold mb-2">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={values.emails}
								onChange={handleChange}
								placeholder="Your Email"
								className=" bg-gray-200 appearance-none border border-transparent rounded w-full px-4 py-2
								focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
							{errorMsg.emails && <p>{errorMsg.emails}</p>}
							<label className=" my-3 block tracking-wide text-blue-400 text-base font-bold mb-2">
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								value={values.password}
								placeholder="Password"
								onChange={handleChange}
								className=" bg-gray-200 appearance-none border border-transparent focus:outline-none 
								focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded w-full px-4 py-2 text-gray-700 my-2"
							/>
							{errorMsg.password && <p>{errorMsg.password}</p>}
							<label className=" my-3 block tracking-wide text-blue-400 text-base font-bold mb-2">
								Confirm Password
							</label>
							<input
								type="password"
								id="password1"
								name="password"
								value={values.confirmPassword}
								placeholder="Confirm Password"
								onChange={handleChange}
								className="bg-gray-200 appearance-none border border-transparent rounded w-full px-4 py-2 text-gray-700  my-2
								focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
							{errorMsg.confirmPassword && <p>{errorMsg.confirmPassword}</p>}
							<Button
								value="Sign Up"
								styleClass="bg-blue-500 hover:bg-gray-400 hover:text-white hover:shadow-xl w-full hover:border-blue-300 hover:border 
								px-5 py-2 text-white grid-flow-row text-lg font-bold"
								id="btnSignUp"
								onClick={handleSubmit}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
