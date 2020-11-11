import { Meteor } from 'meteor/meteor';
// import { Stuffs } from '../../api/stuff/Stuff.js';
import { Contacts } from '../../api/contact/Contact';

/* eslint-disable no-console */

function addContact(data) {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  Contacts.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Contacts.collection.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default contacts.');
    Meteor.settings.defaultContacts.map(data => addContact(data));
  }
}
