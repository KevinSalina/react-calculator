import React from 'react';

const InputBox = (props) => {

  return (
    <input type="text" onChange={event => props.setFunction(event.target.value)} value={props.value} disabled={props.isDisabled} />
  )
};

export default InputBox;