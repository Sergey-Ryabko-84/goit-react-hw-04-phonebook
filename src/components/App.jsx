import { useState } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';
import { useLocalStorage } from './hooks/useLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const onSubmit = (values, { resetForm }) => {
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === values.name.trim().toLowerCase()
      )
    )
      return toast.error(`${values.name} is already in contacts.`);

    setContacts(state => [
      ...state,
      {
        id: nanoid(),
        name: values.name.trim(),
        number: values.number.trim(),
      },
    ]);

    resetForm();
  };

  const deleteContact = e => {
    const { id } = e.currentTarget;
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  const filterHandler = e => setFilter(e.currentTarget.value.trim());

  const contactFiltering = () => {
    return contacts
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  return (
    <AppWrapper>
      <GlobalStyle />
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={onSubmit} />

      <h2>Contacts</h2>
      <Filter handleFilter={filterHandler} />
      <ContactList
        contactList={contactFiltering()}
        value={filter}
        deleteHandler={deleteContact}
      />
    </AppWrapper>
  );
};
