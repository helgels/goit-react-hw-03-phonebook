import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.listItem} key={id}>
      <p>
        {name}: {number}
      </p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
