
import React from 'react';
import "./card.component.css";


export class Card extends React.Component {

 

  render() {
    const {onDelete, person} = this.props
    return (
      <div className="card">
    <button className='del' onClick={onDelete}>x</button>
    <h2>
      {person.first_name} {person.last_name}
    </h2>
    <p> {person.email} </p>
  </div>
    );
  }
}
