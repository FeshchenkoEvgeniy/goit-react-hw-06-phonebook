import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactsForm/ContactForm';
import Filter from './Filter/Filter';
import { ContactList } from './ContactsList/ContactList';
import { Container } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      toast(`${name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = Id => {
    setContacts(contacts.filter(contact => contact.id !== Id));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        getVisibleContacts={getVisibleContacts}
        deleteContact={deleteContact}
      />
      <ToastContainer />
    </Container>
  );
}
