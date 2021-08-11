import React from 'react';
const Button = ({value,styleClass}) => {
    return (
      <section>
        <button className={styleClass}>
          {value}
        </button>
      </section>
    );
}
export default Button;