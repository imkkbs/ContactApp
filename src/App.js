import React, { useState, useEffect } from "react";
import {uuid} from "uuidv4"
import AddContact from "./components/AddContact";
import Navbar from "./components/Navbar";

const getContact = () => {
  if (localStorage.getItem("contacts")) {
    return JSON.parse(localStorage.getItem("contacts"));
  } else {
    return [];
  }
};

function App() {
  const [contacts, setContacts] = useState(getContact());
  const addContactHandler = (contact) => {
    setContacts([...contacts,{id: uuid(),...contact} ]);
  };

  const removeHandler = (id) => {
    const newArray = contacts.filter((contacts) => {
      return contacts.id !== id;
    });
    setContacts(newArray)
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div style={{backgroundColor: "#54606b"}}>

      <Navbar />
      <AddContact
        contacts={contacts}
        addContactHandler={addContactHandler}
        contactHandler={removeHandler}
        />
        </div>
    </>
  );
}

export default App;
