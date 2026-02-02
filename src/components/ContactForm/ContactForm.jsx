import { useState } from 'react';
import '../../App.css';

export default function ContactForm({ onAdd, onClose }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onAdd({ name, number });
        setName('');
        setNumber('');
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <h3>Add new contact</h3>

                <form className="form" onSubmit={handleSubmit}>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces"
                            required
                        />
                    </label>

                    <label>
                        Number
                        <input
                            type="tel"
                            name="number"
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can start with +"
                            required
                        />
                    </label>
                    <div className="modal-actions">
                        <button type="submit" className="btn btn-primary">
                            Save contact
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
