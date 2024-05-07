import { useSelector } from "react-redux";
import Contact from "./Contact";
import { selectedContacts } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectedContacts);
  const filter = useSelector(selectFilteredContacts);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.div}>
      <ul className={css.ul}>
        {filteredContacts.map((contact) => (
          <li className={css.li} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
