import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Navigation = () => {
	const [ showMenu, setShowMenu ] = useState(false);
	let menu
	if (showMenu) {
		 menu = 
			<div className="fixed top-0 bg-white text-blue-400 left-0 w-2/5 h-full ">
				<Link to="/Login" className="p-4 text-blue font-bold text-xl">
					SignIn
				</Link>
					<Link to="/" className="p-4 text-blue font-bold text-xl">
					Home
				</Link>
			</div>
		
	}
	return (
		<nav
			className="flex justify-between items-center h-20 bg-purple-600 bg-opacity-100 text-white relative shadow-sm font-mono"
			role="navigation"
		>
			<Link to="/" className="pl-8 font-bold text-xl tracking-tight">
				Africa Sokoni
			</Link>
			<div className="px-4 cursor-pointer md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					onClick={() => setShowMenu(!showMenu)}
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</div>
			<div className="pr-8 md:block hidden">
				<Link to="/Login" className="p-4 text-blue font-bold text-xl">
					SignIn
				</Link>
					<Link to="/" className="p-4 text-blue font-bold text-xl">
					Home
				</Link>
			</div>

			{menu}
		</nav>
	
	);
};

export default Navigation;
