import { createAction } from "@reduxjs/toolkit";

const setContacts = createAction("contacts/contacts_set");
const addContact = createAction("contacts/contact_add");
const deleteContact = createAction("contacts/contact_delete");
const onFilter = createAction("contacts/filter_change");

// const setContacts = (contacts = []) => ({
//   type: "contacts/contacts_set",
//   payload: contacts,
// });

// const addContact = (contact) => ({
//   type: "contacts/contact_add",
//   payload: contact,
// });

// const deleteContact = (id) => ({
//   type: "contacts/contact_delete",
//   payload: id,
// });

// const onFilter = (text = "") => ({
//   type: "contacts/filter_change",
//   payload: text,
// });

export { deleteContact, addContact, setContacts, onFilter };
