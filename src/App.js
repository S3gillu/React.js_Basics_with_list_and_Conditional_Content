import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { id: 'qw', name: 'Shubham', age: 23 },
      { id: 'qwe', name: 'Saurabh', age: 28 },
      { id: 'qwdf', name: 'Mayank', age: 31 }
    ],
    showPersons: false
  }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style1 = {
      color: 'orangered'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      )
    }

    return (
      <div className="jumbotron">
        <div className="App">
          <h1 style={style1}> Hi, I am a react application </h1>
          <p style={style1}> This is really working </p>

          <button type="button" className="btn btn-success"
            onClick={this.togglePersonHandler.bind(this)}
          >Click Me</button>

          {persons}

        </div>
      </div>
    );
  }
}

export default App;
