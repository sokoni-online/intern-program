import React from 'react';
import Button from './Buttons';
import {Link} from 'react-router-dom';
function Login() {

	return (
		<div className="p-10 my-30">
			<h2 className="text-center text-3xl text-blue-400 ">SIGN IN</h2>
			<form action="">
				<div className="flex justify-center">
					<div className="lg:w-1/3 md:w-2/3 w-full">
						<br />
						<label className=" my-3 block tracking-wide text-blue-400 text-base font-bold mb-2">
							Email
						</label>
						<input
							type="email"
							id="email"
							placeholder="Your Email"
							className=" bg-gray-200 appearance-none border border-transparent rounded w-full px-4 py-2
							 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						/> 
						<label className=" my-3 block tracking-wide text-blue-400 text-base font-bold mb-2">
							Password
						</label>
						<input type="password" id="password" className=" bg-gray-200
                            appearance-none border border-transparent  focus:outline-none focus:ring-2 focus:ring-blue-500
							focus:border-transparent rounded w-full px-4 py-2 text-gray-700  my-2"	
						/>
						<Button
							value="Sign In"
							styleClass="bg-blue-500 hover:bg-gray-400 hover:text-white hover:shadow-xl w-full hover:border-blue-300 hover:border 
							px-5 py-2 text-white grid-flow-row text-lg font-bold"
							id='btnLogin'
						/>
						  <Link to="/Register" className="p-4 text-blue text-blue-400 tracking-normal flex justify-center">
							Have No Account? Signup here
						 </Link>	
					</div>
				</div>
			</form>
		</div>
	);
}

export default Login;
