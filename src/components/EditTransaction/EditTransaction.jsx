import PropTypes from 'prop-types';
import { useState } from 'react';
import ModalUI from "../../UI/ModalUI";
import EditButton from "./EditButton";
import EditTransactionForm from "../EditTransactionForm";

const EditTransaction = ({ operationId, type, category, comment, amount }) => {
    const [modal, setModal] = useState(false)
    
    const toogleModal = () => {
        setModal(!modal)
    }
    return (
        <>
            <EditButton onChange={toogleModal} />
            {
                modal && <ModalUI modalValue={modal} modalAction={toogleModal}>
                    <EditTransactionForm onClose={toogleModal} operationId={operationId} type={type} category={category} comment={comment} amount={amount}/>
                </ModalUI>
            }
        </>
    );
};

EditTransaction.propTypes = {
    operationId: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    comment: PropTypes.string,
    amount: PropTypes.number.isRequired,
};

export default EditTransaction;