import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
	return (
		<nav
			className="flex justify-between items-center h-20 bg-purple-600 bg-opacity-100 text-white relative shadow-sm font-mono"
			role="navigation"
		>
			<Link to="/" className="pl-8">
				Africa Sokoni
			</Link>
			<div className="px-4 cursor-pointer md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</div>
			<div className="pr-8 md:block hidden">
				<Link to="/" className="p-4 text-blue grid justify-items-center" >
					<svg className="h-6 w-6 text-white "
						xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
					</svg>
					Home
				</Link>
				<Link to="/login" className="p-4 text-blue grid justify-items-center">
					<svg
						 className="h-6 w-6 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
					<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
						/>
					</svg>
					Sign In
				</Link>
			</div>
		</nav>
	);
};

export default Navigation;
