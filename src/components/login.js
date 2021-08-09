import React from 'react';
import Button from './Buttons';
function Login() {
	return (
		<div className="pl-10 my-48">
			<h2 className="text-center text-3xl text-blue-500">Sign In</h2>
			<form action="">
				<div className="flex justify-center ">
					<div className="lg:w-1/3 md:w-2/3 w-full">
						<br />
						<label className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2">
							Email
						</label>
						<input
							type="email"
							id="email"
							placeholder="Your Email"
							className=" bg-gray-200
                              appearance-none
                              border-2
                              border-gray-200
                              rounded
                              w-full
                              px-4 py-2
                              @media screen(sm) {
                              w-3.5
                            }"
						/>
						<br />
						<br />
						<label className="block 
                        uppercase
                        tracking-wide
                        text-blue-700
                        text-xs
                        font-bold mb-2">
							Password
						</label>
						<input
							type="password"
							id="password"
							className=" bg-gray-200
                            appearance-none border-2 border-gray-200
                            rounded w-full px-4 py-2 text-gray-700  my-2
                            @media screen(sm) {
                            w-3.5
                          }"
						/>
						<Button
							value="Sign In"
							styleClass="bg-blue-500 px-5 py-2 text-white grid-flow-row text-lg font-bold"
						/>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Login;
