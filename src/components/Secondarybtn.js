import React from 'react';

const Buttons= ({item}) => {
    return (
      <div>
            <button className='border-2 border-blue-500 px-4 py-6'>
                {item}
            </button>
      </div>
    );
}

export default Buttons;