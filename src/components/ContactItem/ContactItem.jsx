import '../../App.css';
export default function ContactItem({ contact, onDelete }) {
    return (
        <li className="item">
            <span>
                {contact.name}: {contact.number}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => onDelete(contact.id)}
            >
                Delete
            </button>
        </li>
    );
}
