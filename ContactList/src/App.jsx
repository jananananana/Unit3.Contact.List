import { useState } from 'react'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'
import './App.css'


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId === null ? <ContactList setSelectedContactId={setSelectedContactId} /> : <SelectedContact setSelectedContactId={setSelectedContactId} contact={selectedContactId} />}
    </>
  )
}

export default App
