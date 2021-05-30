import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { NewPerson } from "./components/newperson/newperson.component";
import "./App.css";

export default class App extends Component {
  maxID = 13;
  state = {
    persons: [],
    add: false,
  };

  addPerson = (text, text1, text2) => {
    const newPerson = {
      id: this.maxID++,
      email: text2,
      first_name: text,
      last_name: text1,
    };
    this.setState(({ persons }) => {
      const newPerosnList = [...persons, newPerson];
      return {
        persons: newPerosnList,
      };
    });
    console.log(this.state.persons, this.maxID);
  };

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ persons: response.data });
      });
  }
  onDelete = (index) => {
    
    this.setState(({ persons }) => {
      const personList = [...persons];
      personList.splice(index, 1);
      return {
        persons: personList,
      };
    });
  };
  plusClick = () => {
    this.setState({
      add: !this.state.add,
    });
  };
  render() {
    const { add } = this.state;
    return (
      <div>        
        <div className='App'>
          <button className="plus" onClick={this.plusClick}>+</button>
          <h1>Persons list</h1>
          <CardList persons={this.state.persons} onDelete={this.onDelete} add={add}/>
          <NewPerson addPerson={this.addPerson} add={add}/>
        </div>
      </div>
    );
  }
}
