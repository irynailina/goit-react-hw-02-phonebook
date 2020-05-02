import React from "react";
import ContactsItem from '../ContactsItem/ContactsItem'

export default function ContactsList({contacts, deleteContact}) {
return (
    <ul>
        {contacts.map(contact => <ContactsItem 
        key={contact.id} 
        contact={contact}
        deleteContact={deleteContact}
        />)}
    </ul>
)
}
