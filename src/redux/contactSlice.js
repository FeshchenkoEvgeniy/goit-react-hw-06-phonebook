import { createSlice, nanoid } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contact = [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contact, filter: '' },
  reducers: {
    addContact: {
      reducer(state, action) {
        if (
          state.contact.some(
            contact =>
              contact.name.toLowerCase() === action.payload.name.toLowerCase()
          )
        ) {
          alert(`${action.payload.name} is already in the contact list`);
          return;
        }
        state.contact.push(action.payload);
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
      const index = state.contact.filter(
        contact => contact.id === action.payload
      );
      state.contact.splice(index, 1);
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

const contactsPersistConfig = {
  key: 'contacts',
  version: 1,
  storage,
};

export const persisteContactReducer = persistReducer(
  contactsPersistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;
