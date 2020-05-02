import React, { Component } from "react";
import Form from "../Form/Form";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";

class Contacts extends Component {
  state = {
    contacts: [],
    error: false,
    filter: "",
  };

  getContact = (newContact) => {
    const { name, number } = newContact;
    if (name && number) {
      this.setState((prevstate) => ({
        error: false,
        contacts: [...prevstate.contacts, newContact],
      }));
    } else if (!this.state.error) {
      this.setState((prev) => ({
        error: !prev.error,
      }));
    }
  };

  deleteContact = (e) => {
    const id = e.target.id;
    this.setState((prev) => ({
      contacts: [...prev.contacts.filter((contact) => contact.id !== id)],
      error: false,
    }));
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleChangeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  //   })

  // const nameToFind = e.target.name;
  // this.setState(prev => ({
  //     contacts: [...prev.contacts.filter((contact) => contact.name === nameToFind)]
  // }))

  // if ( name.includes(nameToFind.toLowerCase()) ) {
  //     return
  // }

  render() {
    const { contacts, error, filter } = this.state;
    console.log(contacts);
    // console.log(this.state.contacts);
    console.log(filter);
    return (
      <>
        <Form getContact={this.getContact} />
        <h2>Contacts</h2>
        <Filter
          name="filter"
          type="text"
          value={filter}
          filterContact={this.handleChangeFilter}
        />
        <ContactsList contacts={contacts} deleteContact={this.deleteContact} />
        {error && <p>Enter missing data!</p>}
      </>
    );
  }
}

export default Contacts;
