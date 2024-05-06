import { useState } from "react";
import { useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

export default function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contactsData={filteredContacts} />
    </div>
  );
}
