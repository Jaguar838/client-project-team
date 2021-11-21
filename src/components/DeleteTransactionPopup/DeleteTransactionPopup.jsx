import css from "./DeleteTransactionPopup.module.scss";

const DeleteTransaction = ({onClick, onClose}) => {
    const deleteTransaction = () => {
        onClick();
        onClose()
    };

    return (
        <div className={css.popupContent}>
            <p className={css.popupQuestion}>Вы действительно хотите удалить эту транзакцию?</p>
                <button className={css.popupButton} type="button" onClick={deleteTransaction}>Да</button>
            <button className={css.popupButton} onClick={()=>onClose()}>Нет</button>              
          </div>
    )
}

export default DeleteTransaction;