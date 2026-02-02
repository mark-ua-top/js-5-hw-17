import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import './App.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    if (contacts.some(c => c.name.toLowerCase() === normalizedName)) {
      alert(`${name} вже є в телефонній книзі`);
      return;
    }

    setContacts(prev => [
      ...prev,
      { id: nanoid(), name, number },
    ]);
    setIsModalOpen(false);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  const visibleContacts = contacts.filter(contact => {
    const query = filter.toLowerCase();

    return (
      contact.name.toLowerCase().includes(query) ||
      contact.number.toLowerCase().includes(query)
    );
  });


  return (
    <div className="app">
      <h1>Phonebook</h1>

      <button
        className="btn btn-primary btn-add"
        onClick={() => setIsModalOpen(true)}
      >
        Add contact
      </button>


      {isModalOpen && (
        <ContactForm
          onAdd={addContact}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <h2>Contacts</h2>
      <Filter value={filter} onChange={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
