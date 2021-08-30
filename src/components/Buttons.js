import React from 'react';
const Button = ({value,styleClass,id}) => {
    return (
      <section>
        <button className={styleClass} id={id}>
          {value}
        </button>
      </section>
    );
}
export default Button;