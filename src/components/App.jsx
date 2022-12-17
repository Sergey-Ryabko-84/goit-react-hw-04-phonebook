import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) this.setState({ contacts: contacts });
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  onSubmit = (values, { resetForm }) => {
    if (
      this.state.contacts.some(
        contact =>
          contact.name.toLowerCase() === values.name.trim().toLowerCase()
      )
    )
      return alert(`${values.name} is already in contacts.`);

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name: values.name.trim(),
          number: values.number.trim(),
        },
      ],
    }));
    resetForm();
  };

  deleteContact = e => {
    const { id } = e.currentTarget;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterHandler = e => this.setState({ filter: e.currentTarget.value.trim() });

  contactFiltering = () => {
    return this.state.contacts
      ? this.state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  render() {
    return (
      <AppWrapper>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter handleFilter={this.filterHandler} />
        <ContactList
          contactList={this.contactFiltering()}
          value={this.state.filter}
          deleteHandler={this.deleteContact}
        />
      </AppWrapper>
    );
  }
}
