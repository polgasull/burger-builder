import React from 'react';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>
      Lorem ipsum <b> { props.username } </b> dolor sit amet, consectetur adipiscing elit. Vivamus a sem ut ante finibus imperdiet. Nam lobortis, massa eget viverra hendrerit, neque ante porttitor felis, sagittis efficitur lacus massa id nulla. Nam nec enim eu ante vestibulum euismod.
      </p>
    </div>
  )
}

export default userOutput; 