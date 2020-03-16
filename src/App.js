import React, { Component } from 'react';

import styles from './App.module.scss';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { id: '123', name: "Pol", age: 30 },
      { id: '1234', name: "Manu", age: 29 },
      { id: '12345', name: "Stephanie", age: 44 }
    ],
    users: [
      { username: "Pol" },
      { username: "Berta" },
    ],
    otherState: "some other value",
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  addUserName = (event) => {
    this.setState({
      users: [
        { username: event.target.value },
        { username: event.target.value }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    let persons = false; 
    let btnClass = [styles.button]; 

    if ( this.state.showPersons ) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={ person.name }
              age={ person.age }
              key={ person.id }
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass.push(styles.red)
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(styles.red); // ['red']
    } 
    if (this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold); // ['red', 'bold']
    } 

    return (
      <div className={styles.App}>
        <h1> Hello I'm a react app </h1>  
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        
        <button className={btnClass.join(' ')} key="key1" onClick={this.togglePersonsHandler}> Toggle content! </button>

        { persons }

        <div>
          <UserInput changed={ this.addUserName}/>
          <button className={btnClass.join(' ')} key="key2" onClick={this.addUserName}> Add UserName </button>
        </div>

        <div>
          <UserOutput username={this.state.users[0].username } />  
          <UserOutput username={this.state.users[1].username }/>  
        </div>

      </div>
    );
  }
}

export default App;
