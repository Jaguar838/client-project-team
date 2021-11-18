import { useState } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types'
import ValidationTransaction from "./ValidationTransaction";
import BtnClose from "./BtnClose";
import { data } from "../../_backend-mock/categories.json";
import TextInput from "./TextInput";
import CommentInput from "./CommentInput";
import Select from "./Select";
import SwitchComponent from "./SwitchComponent";
import MainButton from "../../UI/buttons/MainButton";
import Calendar from "../Calendar";
import css from "./AddTransaction.module.scss";
 
const AddTransaction = ({ onClose }) => {
    const [checkBox, setCheckBox] = useState(true);
    const handleChange = () => {
        setCheckBox(!checkBox)
    };

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
                    initialValues={{
                        amount: '',
                        date: new Date(),
                        comment: '',
                        category: '',
                    }}
                    validationSchema={ValidationTransaction}
                    onSubmit={(values, { resetForm }) => {
                        alert(JSON.stringify(values, null, 2));
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
                                <Select
                                    label="category"
                                    name="category">
                                    <option className={css.textOption} value="">Выберите категорию</option>
                                    {data.map((category) => (
                                        <option className={css.selectorOption} key={category.color} value={category.color}>{category.name}</option>
                                    ))}
                                </Select>}

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
                                    onChange={date => setFieldValue('date', date)}
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