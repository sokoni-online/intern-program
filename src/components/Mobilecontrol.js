import React from 'react';
import { Link } from 'react-router-dom';

const MobileControl=({ isToggle ,toggler })=> {
	return (
		<div
            className={isToggle ? 'grid grid-rows-2 text-center items-center bg-blue-400' : 'hidden'}
            onClick={toggler}
		>
			<Link
				to="/Login"
				className="p-4 text-white font-bold text-xl hover:bg-blue-200 focus:outline-none focus:ring-2
				focus:ring-blue-300 focus:ring-opacity-50 rounded"
			>
				SIGNIN
			</Link>
			<Link
				to="/"
				className="p-4 text-white font-bold text-xl hover:bg-blue-200 focus:outline-none focus:ring-2 
					focus:ring-blue-300 focus:ring-opacity-50 rounded"
			>
				HOME
			</Link>
		</div>
	);
};

export default MobileControl;
