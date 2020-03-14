import React from 'react';

const userInput = (props) => {
  return (
    <div className="UserInput">
      <label> UserName </label>
      <input type="text" onChange={props.changed}></input>
    </div>
  )
}

export default userInput; 