import React from "react";

const ContactsItem = ({ contact: { id, name, number }, deleteContact }) => (
  <>
  <li>
    <span>{name}:</span>
    <span>{number}</span>
  <button id={id} onClick={deleteContact}>Delete</button>
  </li>
  </>
);

export default ContactsItem;
