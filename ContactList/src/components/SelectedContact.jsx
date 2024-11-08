export default function SelectedContact({ contact }) {
    return (
        <div>
            <h2>{contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
        </div>
    );
}