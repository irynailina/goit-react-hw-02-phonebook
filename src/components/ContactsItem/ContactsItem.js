import React from "react";
import styles from "./contactsItem.module.css";

const ContactsItem = ({
  contact: { id, name, number },
  deleteContact,
  idx,
}) => (
  <>
    <tr className={idx % 2 === 0 ? styles.trEven : styles.trOdd}>
      <td>{name}</td>
      <td>{number}</td>
      <td>
        <button className={styles.deleteBtn} id={id} onClick={deleteContact}>
          Delete
        </button>
      </td>
    </tr>
  </>
);

export default ContactsItem;
