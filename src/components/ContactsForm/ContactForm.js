import { Form, Input, Button, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
export default function ContactForm() {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contacts.contact);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    if (
      contact.some(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      alert(`${name.value} is already in the contact list`);
      return;
    } else {
      dispatch(addContact(name.value, number.value));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
