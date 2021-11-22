import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import {getCategories} from '../../redux/categories/categories-selectors';
import PropTypes from 'prop-types'
import ValidationTransaction from "./ValidationTransaction";
import { addTransaction } from "../../redux/transactions/transactions-operations";
import BtnClose from "./BtnClose";
import TextInput from "./TextInput";
import CommentInput from "./CommentInput";
import Select from "./Select";
import SwitchComponent from "./SwitchComponent";
import MainButton from "../../UI/buttons/MainButton";
import Calendar from "../Calendar";
import css from "./AddTransaction.module.scss";
 
const AddTransaction = ({ onClose }) => {
    const [checkBox, setCheckBox] = useState(true);
    const categories = useSelector(state => getCategories(state));
    const idIncomes = categories.incomes.find(category => category.id);
    const schema = ValidationTransaction();
    const dispatch=useDispatch()
    const handleChange = () => {
        setCheckBox(!checkBox)
    };
    const currentDate = new Date().toLocaleDateString()
    const IdCategory = !checkBox ? '' : idIncomes.id;
    
    return (
        <>
            <div className={css.transactionContainer}>
                <BtnClose onClick={onClose} />
                <h1 className={css.title}>Добавить транзакцию</h1>

                <SwitchComponent
                    checked={checkBox}
                    onChange={handleChange}
                />
                <Formik
                    enableReinitialize
                    initialValues={{
                        amount: '',
                        date: currentDate,
                        comment: '',
                        category: IdCategory,
                    }}
                    validationSchema={schema}
                    onSubmit={(values, { resetForm }) => {
                        dispatch(addTransaction(values));
                        // alert(JSON.stringify(values, null, 2));
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
                                    <option className={css.textOption} value=''>Выберите категорию</option>
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
                                    placeholder="0.00"
                                />
                   
                                <Calendar
                                    name="date"
                                    selected={values.date}
                                    onChange={date => setFieldValue('date', date.toLocaleDateString())}
                                />
                            </div>
                        
                            <CommentInput
                                label="comment"
                                name="comment"
                                type="text"
                                placeholder="Комментарий"
                            />

                            <div className={css.transactionButton}>
                                <MainButton submit={'submit'} text={'Добавить'} />
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

AddTransaction.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default AddTransaction;