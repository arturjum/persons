import React from "react";
import './newperson.component.css'

export class NewPerson extends React.Component {
  state = {
    fisrt_name: "",
    last_name: "",
    email: "",
  };
  changeFname = (event) => {
    this.setState({
        fisrt_name: event.target.value,
    });
  };
  changeLname = (event) => {
    this.setState({
      last_name: event.target.value,
    });
  };
  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  onSubmitPerson = (ev) => {
    ev.preventDefault();
    if (this.state.fisrt_name !== "") {
      this.props.addPerson(this.state.fisrt_name, this.state.last_name, this.state.email);
    } else {
      alert("empty");
    }
    this.setState({
      fisrt_name: "",
      last_name: "",
      email: "",
    });
  }; 

  render() {
    const {add} = this.props;
    return (
      <div>        
        <form  className={`pers ${add ? 'active' : ''}`} onSubmit={this.onSubmitPerson}>
        <input
            type="text"
            placeholder='first name'
            onChange={this.changeFname}
            value={this.state.fisrt_name}
          />
          <input
            type="text"
            placeholder='last name'
            onChange={this.changeLname}
            value={this.state.last_name}
          />
          <input
            type="text"
            placeholder='email'
            onChange={this.changeEmail}
            value={this.state.email}
          />
          <button>ADD PERSON</button>
        </form>
      </div>
    );
  }
}
