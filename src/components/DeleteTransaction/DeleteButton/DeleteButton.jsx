import PropTypes from 'prop-types';
import { BtnDelete } from "./styles";

const DeleteButton = ({onChange}) => {
    return (
        <BtnDelete type="button" onClick={onChange}/>
    )
}

DeleteButton.propTypes = {
    onChange: PropTypes.func,
};

export default DeleteButton;