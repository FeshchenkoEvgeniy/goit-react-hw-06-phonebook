import { useDispatch, useSelector } from 'react-redux';
import { Div, Label } from './Filter.styled';
import { filterContact } from '../../redux/contactSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(filterContact(evt.target.value));
  };
  return (
    <Div>
      <Label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>
    </Div>
  );
};

export default Filter;
