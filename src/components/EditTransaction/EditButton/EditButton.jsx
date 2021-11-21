import PropTypes from 'prop-types';
import { BtnEdit } from "./styles";

const EditButton = ({ onChange }) => {
    
    return (
            <BtnEdit type="button" onClick={onChange} />
    );
};

EditButton.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default EditButton;