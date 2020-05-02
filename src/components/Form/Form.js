import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import InputForm from "../InputFrom/InputForm";

class Form extends Component {
  state = {
    // contacts: [],
    name: "",
    number: "",
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    this.props.getContact(newContact);
    this.reset();
  };

  nameId = uuidv4();

  render() {
    const { name, number } = this.state;
    // console.log(contacts);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={uuidv4()}>Name</label>
          <InputForm
            type="text"
            placeholder="Enter name"
            value={name}
            handleChange={this.handleChange}
            id={this.nameId}
            name="name"
          />
          <label htmlFor={this.nameId}>Number</label>
          <InputForm
            type="number"
            placeholder="Enter number"
            value={number}
            handleChange={this.handleChange}
            id={this.nameId}
            name="number"
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default Form;
