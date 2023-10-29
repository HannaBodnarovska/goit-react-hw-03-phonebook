import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={styles.item}>
    <span>{contact.name}:</span>
    <span>{contact.number}</span>
    <button className={styles.button} onClick={() => onDeleteContact(contact.id)}>
      Delete
    </button>
  </li>
);

export default ContactItem;
