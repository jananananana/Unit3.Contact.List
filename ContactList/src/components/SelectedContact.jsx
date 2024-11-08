export default function SelectedContact({ contact, setSelectedContactId }) {
    return (
        <div onClick={() => setSelectedContactId(null)}>
            <h2>{contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Username: {contact.username}</p>
            <p>Website: {contact.website}</p>
        </div>
    );
}