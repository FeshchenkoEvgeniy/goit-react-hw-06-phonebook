import PropTypes from 'prop-types';
import { Div, Label } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Div>
      <Label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>
    </Div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
