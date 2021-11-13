import PropTypes from 'prop-types'
import css from "./ContainerAuthImage.module.scss";

const ContainerAuthImage = ({ children, title }) => {
    return (
        <div className={css.containerImage}>
            {children}
            <h1 className={css.MainTitle}>{title}</h1>
        </div>
    )
};

ContainerAuthImage.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
}

export default ContainerAuthImage;