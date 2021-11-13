import PropTypes from 'prop-types'
import css from "./ContainerAuthForm.module.scss";

const ContainerAuthForm = ({ children, formContainer }) => {
    return (
        <div className={css[`${formContainer}`]}>
            {children}
        </div>
    )
};

ContainerAuthForm.propTypes = {
    children: PropTypes.node,
}

export default ContainerAuthForm;