import React from 'react';

const Button = ({value,onClick}) => {
    return (
      <section>
        <button className='bg-blue-500 px-5 py-2 text-white'>
          {value}
        </button>
      </section>
    );
}

export default Button;