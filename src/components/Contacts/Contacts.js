import React, { Component } from "react";
import Form from "../Form/Form";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";
import styles from "./contacts.module.css";

const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

class Contacts extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    // error: false,
    filter: "",
  };

  getContact = (newContact) => {
    const { name } = newContact;
    const newName = this.state.contacts.some(
      (contact) => contact.name === name
    );
    if (!newName) {
      this.setState((prevstate) => ({
        // error: false,
        contacts: [...prevstate.contacts, newContact],
      }));
    } else alert("This contact is already in contacts!");
  };

  deleteContact = (e) => {
    const id = e.target.id;
    this.setState((prev) => ({
      contacts: [...prev.contacts.filter((contact) => contact.id !== id)],
      // error: false,
    }));
  };

  handleChangeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);
    // console.log(contacts);
    return (
      <>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>Phonebook</h2>
          </div>
          <div className={styles.formWrap}>
            <Form getContact={this.getContact} />
          </div>
          <h2 className={styles.contacts}>Contacts</h2>
          <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
          <ContactsList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
          {/* {error && <p>Enter missing data!</p>} */}
        </div>
      </>
    );
  }
}

export default Contacts;

// getContact = (newContact) => {
//   const { name, number } = newContact;
//   if (name && number) {
//     this.setState((prevstate) => ({
//       error: false,
//       contacts: [...prevstate.contacts, newContact],
//     }));
//   } else if (!this.state.error) {
//     this.setState((prev) => ({
//       error: !prev.error,
//     }));
//   }
// };
