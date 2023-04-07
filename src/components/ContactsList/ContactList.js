import { MdAccountCircle, MdDeleteForever } from 'react-icons/md';
import { ListItem, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contact);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul>
      {visibleContacts().map(({ id, name, number }) => (
        <ListItem key={id}>
          <MdAccountCircle size={16} /> <span>{name}: </span>
          <span>{number}</span>
          <Button type="button" onClick={id => dispatch(deleteContact(id))}>
            <MdDeleteForever />
            delete
          </Button>
        </ListItem>
      ))}
    </ul>
  );
};
