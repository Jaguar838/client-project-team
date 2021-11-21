import { useField } from 'formik';
import PropTypes from 'prop-types';
import css from "./TextInput.module.scss";

const TextInput = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={css.inputContainer}>
      <label htmlFor={props.id || props.name}>
        {children}
      </label>
      <input className={css.textInput} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={css.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    props: PropTypes.node,
}
 
export default TextInput;