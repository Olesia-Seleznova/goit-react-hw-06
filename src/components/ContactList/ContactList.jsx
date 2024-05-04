import Contact from "./Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contactsData }) {
  return (
    <div className={css.div}>
      <ul className={css.ul}>
        {contactsData.map((contact) => (
          <li className={css.li} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
