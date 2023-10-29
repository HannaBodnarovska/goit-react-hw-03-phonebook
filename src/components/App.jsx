import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.state.contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name && typeof contact.name === 'string' && contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
