import { useField } from 'formik';
import PropTypes from 'prop-types';
import css from "./CommentInput.module.scss";

const CommentInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={css.commentContainer}>
      <label htmlFor={props.id || props.name}>
      </label>
      <input className={css.commentInput} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

CommentInput.propTypes = {
    label: PropTypes.string.isRequired,
    props: PropTypes.node,
}
 
export default CommentInput;