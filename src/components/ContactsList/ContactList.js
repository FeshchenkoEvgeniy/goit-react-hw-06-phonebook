import PropTypes from 'prop-types';
import { MdAccountCircle,MdDeleteForever } from 'react-icons/md';
import { ListItem, Button } from './ContactList.styled';
export const ContactList = ({ getVisibleContacts, deleteContact }) => {
  return (
    <ul>
      {getVisibleContacts().map(({ id, name, number }) => (
        <ListItem key={id}>
          <MdAccountCircle size={16}/> <span>{name}: </span>
          <span>{number}</span>
          <Button type="button" onClick={() => deleteContact(id)}>
           <MdDeleteForever />delete
          </Button>
        </ListItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  getVisibleContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
