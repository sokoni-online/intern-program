import React from 'react';
const Button = ({value,styleClass,id,type}) => {
    return (
      <section>
        <button className={styleClass} id={id} type={type}>
          {value}
        </button>
      </section>
    );
}
export default Button;