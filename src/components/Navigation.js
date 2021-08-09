import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
	return (
		<nav className="flex justify-between items-center h-20 bg-purple-600 bg-opacity-100 text-white relative shadow-sm font-mono" role="navigation">
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
				<Link to="/" className="p-4 text-blue">
					Home
				</Link>
				<Link to="Signin" className="p-4 text-blue">
					Sign In
				</Link>
			</div>
		</nav>
	);
};

export default Navigation;
