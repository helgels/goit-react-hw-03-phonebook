import PropTypes from 'prop-types';
import css from '../Form/Form.module.css';

export const Filter = ({ handlerFilter }) => {
  return (
    <form className={css.form}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="name"
          onChange={handlerFilter}
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  handlerFilter: PropTypes.func.isRequired,
};
