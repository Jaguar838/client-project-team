import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import {getCategories} from '../../redux/categories/categories-selectors';
import {getPage} from '../../redux/transactions/transactions-selectors';
import PropTypes from 'prop-types'
import ValidationEdit from "./ValidationEditForm";
import { editTransaction } from "../../redux/transactions/transactions-operations";
import BtnClose from "./BtnClose";
import TextInput from "./TextInput";
import CommentInput from "./CommentInput";
import Select from "./Select";
import SwitchComponent from "./SwitchComponent";
import MainButton from "../../UI/buttons/MainButton";
import css from "./EditTransactionForm.module.scss";
 
const EditTransactionForm = ({ onClose, operationId, type, category, comment, amount }) => {
    const checked = type === "+" ? true : false;
    const checkBox = checked;
    const categories = useSelector(state => getCategories(state));
    const page = useSelector(getPage);
    const idIncomes = categories.incomes.find(category => category.id);
    const idExpenses = categories.expenses.find(operation => operation.name === category);
    const schema = ValidationEdit();
    const dispatch = useDispatch();

    
    let IdCategory;
    if (checked) {
     IdCategory = checkBox ? idIncomes.id : '';
    };
    if (!checked) {
        IdCategory = !checkBox ? idExpenses.id : idIncomes.id;
    };
    
    return (
        <>
            <div className={css.transactionContainer}>
                <BtnClose onClick={onClose} />
                <h1 className={css.title}>Изменить транзакцию</h1>

                <SwitchComponent
                    checked={checkBox}
                />
                <Formik
                    enableReinitialize
                    initialValues={{
                        amount: amount,
                        comment: comment,
                        category: IdCategory,
                    }}
                    validationSchema={schema}
                    onSubmit={(values, { resetForm }) => {
                        dispatch(editTransaction({ operationId, values, page }));
                        resetForm();
                        onClose()
                    }}
                >
                    {({ errors,
                        values,
                        touched,
                        dirty,
                        handleSubmit,
                        handleReset,
                        isSubmitting,
                        setFieldValue,
                        setFieldTouched, }) => (
                        
                        <Form
                            className={css.formTransactionContainer}
                        >
                    
                            {!checkBox &&
                                (<Select
                                    label="category"
                                    name="category">
                                <option className={css.textOption} value={category}>{category}</option>
                                    {categories.expenses.map((category) => (
                                        <option className={css.selectorOption} key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </Select>)
                            }

                            <div className={css.inputWrapper}>
                                <TextInput
                                    label="amount"
                                    name="amount"
                                    type="number"
                                    placeholder={amount}
                                />
                            </div>
                        
                            <CommentInput
                                label="comment"
                                name="comment"
                                type="text"
                                placeholder={comment}
                            />

                            <div className={css.transactionButton}>
                                <MainButton submit={'submit'} text={'Изменить'} />
                            </div>
                        </Form>)}
                </Formik>
                <div className={css.cancelButton}>
                    <MainButton secondary text={'Отмена'} onClick={onClose} />
                </div>
            </div>
        </>
    );
};

EditTransactionForm.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default EditTransactionForm;