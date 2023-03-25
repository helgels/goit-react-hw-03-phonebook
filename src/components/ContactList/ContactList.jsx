import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactList/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul className={css.list}>
      {contactList.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};