import React from 'react';
import { Card } from "../card/card.component";
import "./card-list.component.css";

export class CardList extends React.Component {

 

  render() {
    const {persons, add, onDelete} = this.props
    return (
      <div className={`card-list ${add ? 'grey' : ''}`}>
        {persons.map((person, index) => (
          <Card key={person.id} index={index} person={person} 
           onDelete={() => onDelete(index)} />
        ))}
      </div>
    );
  }
}
