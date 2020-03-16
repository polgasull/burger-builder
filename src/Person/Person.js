import React from 'react';

import styles from './Person.module.scss';

const person = (props) => {

  return (
    <div className={styles.Person}>
      <p onClick={props.click}> My name is { props.name } and I'm { props.age } years old </p>
      <p> { props.children } </p>
      <input type="text" onChange={props.changed}></input>
    </div>
  )
}

export default person; 