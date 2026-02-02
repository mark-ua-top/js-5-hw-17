export default function Filter({ value, onChange }) {
    return (
        <input
            className="filter"
            type="text"
            placeholder="Search contacts..."
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    );
}
