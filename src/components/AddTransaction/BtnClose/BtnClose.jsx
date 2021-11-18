import SvgIcon from "../../../UI/SvgIcon";
import PropTypes from 'prop-types'
import css from "./BtnClose.module.scss";

const BtnClose = ({onClick}) => {
    return (
        <button className={css.btnClose} type='button' onClick={onClick}>
            <SvgIcon iconName={'modalClose'}/>
        </button>
    )
}

BtnClose.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default BtnClose;