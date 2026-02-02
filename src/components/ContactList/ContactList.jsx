import ContactItem from '../ContactItem/ContactItem';
import '../../App.css';

export default function ContactList({ contacts, onDelete }) {
    if (contacts.length === 0) {
        return <p className="empty">No contacts yet</p>;
    }

    return (
        <ul className="list">
            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
