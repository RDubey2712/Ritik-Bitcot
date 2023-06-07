import React, { useState } from 'react';
import './contactview.css';
import { CiCirclePlus } from 'react-icons/ci';
// import { IconName } from "react-icons/ai";
import AddForm from './AddForm';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

const ContactViews = (props) => {
  const [open, setOpen] = useState(false);
  const [contactData, setContactData] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchText, setSearchText] = useState('');

  const openForm = () => {
    setOpen(!open);
    setSelectedContact(null);
  };

  const handleFormSubmit = (formData) => {
    if (selectedContact) {
      const updatedData = contactData.map((contact) => {
        if (contact.id === selectedContact.id) {
          return { ...contact, ...formData };
        }
        return contact;
      });
      setContactData(updatedData);
    } else {
      const newContact = { ...formData, id: Date.now() };
      setContactData((prevData) => [...prevData, newContact]);
    }
    setOpen(false);
  };

  const deleteContact = (contactId) => {
    const updatedData = contactData.filter((contact) => contact.id !== contactId);
    setContactData(updatedData);
  };

  const editContact = (contactId) => {
    const contact = contactData.find((contact) => contact.id === contactId);
    if (contact) {
      setSelectedContact(contact);
      setOpen(true);
    }
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = contactData.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.PhoneNumber.includes(searchText) ||
      contact.Address.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
    <div id='parent'>
      <div className="main">
        
        <div className='contact'>
          All Contacts
          <CiCirclePlus onClick={openForm} />
        </div>
        <input type="text" name="" id="" placeholder="Search Contact" value={searchText} onChange={handleSearch} />
        <div>{open && <AddForm handleFormSubmit={handleFormSubmit} selectedContact={selectedContact} />}</div>
        {filteredData.length > 0 && (
          <div id='Showdata'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.PhoneNumber}</td>
                  <td>{contact.Address}</td>
                  <td>
                    <button onClick={() => editContact(contact.id)}><FaEdit/></button>
                    <button onClick={() => deleteContact(contact.id)}><AiOutlineDelete/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default ContactViews;