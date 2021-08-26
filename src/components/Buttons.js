import React from 'react';
const Button = ({value,styleClass,id,event}) => {
    return (
      <section>
        <button className={styleClass} id={id} onClick={event}>
          {value}
        </button>
      </section>
    );
}
export default Button;