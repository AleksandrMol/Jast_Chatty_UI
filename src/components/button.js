import React from 'react';

function Button(props) {
  return (
    <button disabled={!props.active} className="button">
      {props.title}
    </button>
  );
}
export default Button;
