import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from "../../redux/transactions/transactions-operations";
import DeleteTransactionPopup from "../DeleteTransactionPopup";
import DeleteButton from "./DeleteButton";
import Popup from "../../UI/Popup";

const DeleteTransaction = ({ operationId }) => {
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch();
    
    const toogleModal = () => {
        setModal(!modal)
    }
    
    return (
        <>
            <DeleteButton onChange={toogleModal} />
            {
                modal && <Popup onClose={toogleModal}>
                    <DeleteTransactionPopup onClick={() => dispatch(deleteTransaction(operationId))} onClose={toogleModal} />
                </Popup>
            }
        </>
    );
};

DeleteTransaction.propTypes = {
    operationId: PropTypes.string.isRequired,
};

export default DeleteTransaction;