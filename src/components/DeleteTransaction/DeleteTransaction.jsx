import PropTypes from 'prop-types';
import {getPage} from '../../redux/transactions/transactions-selectors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from "../../redux/transactions/transactions-operations";
import DeleteTransactionPopup from "../DeleteTransactionPopup";
import DeleteButton from "./DeleteButton";
import Popup from "../../UI/Popup";

const DeleteTransaction = ({ operationId }) => {
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch();
    const page = useSelector(getPage);
    const toogleModal = () => {
        setModal(!modal)
    }
    
    return (
        <>
            <DeleteButton onChange={toogleModal} />
            {
                modal && <Popup onClose={toogleModal}>
                    <DeleteTransactionPopup onClick={() => dispatch(deleteTransaction({ operationId, page }))} onClose={toogleModal} />
                </Popup>
            }
        </>
    );
};

DeleteTransaction.propTypes = {
    operationId: PropTypes.string.isRequired,
};

export default DeleteTransaction;