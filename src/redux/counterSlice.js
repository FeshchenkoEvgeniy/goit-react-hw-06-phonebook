import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        // if (
        //   initialState.some(
        //     contact => contact.name.toLowerCase() === action.payload.name
        //   )
        // ) {
        //   alert(`${action.payload.name} this contact already exists`);
        //   return;
        // }
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      console.log(state);
      console.log(action);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;

// const newContact = {
//   id: nanoid(),
//   name,
//   number,
// };
// if (
//   contacts.some(
//     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//   )
// ) {
//   toast(`${name} is already in contacts.`);
//   return;
// }
