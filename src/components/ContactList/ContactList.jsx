import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map((contact) => (
      <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
    ))}
  </ul>
);

export default ContactList;
