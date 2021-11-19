import { useField } from 'formik';
import PropTypes from 'prop-types';
import css from "./Select.module.scss";

const Select = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <div className={css.selectorContainer}>
       <label htmlFor={props.id || props.name}></label>
       <select className={css.textSelector} {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className={css.error}>{meta.error}</div>
       ) : null}
     </div>
   );
 };

Select.propTypes = {
    label: PropTypes.string.isRequired,
    props: PropTypes.node,
}
 
export default Select;