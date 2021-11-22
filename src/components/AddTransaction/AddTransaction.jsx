import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/categories/categories-selectors';
import PropTypes from 'prop-types';
import ValidationTransaction from './ValidationTransaction';
import { addTransaction } from '../../redux/transactions/transactions-operations';
import BtnClose from './BtnClose';
import TextInput from './TextInput';
import CommentInput from './CommentInput';
// import Select from "./Select";
import SwitchComponent from './SwitchComponent';
import MainButton from '../../UI/buttons/MainButton';
import Calendar from '../Calendar';
import css from './AddTransaction.module.scss';

import Select from 'react-select';
import customStyles from './CustomStyles/customStyles';
import SvgIcon from '../../UI/SvgIcon';

const AddTransaction = ({ onClose }) => {
  const [checkBox, setCheckBox] = useState(true);
  const [selectedOption, setSelectedOption] = useState({
    value: null,
    label: '',
  });
  const categories = useSelector(state => getCategories(state));
  const idIncomes = categories.incomes.find(category => category.id);
  const schema = ValidationTransaction();
  const dispatch = useDispatch();
  const handleChange = () => {
    setCheckBox(!checkBox);
  };

  const sort = arr => {
    let optionsSpend = [];
    arr.forEach(({ id, name }) =>
      optionsSpend.push({
        value: id,
        label: name,
      }),
    );
    return optionsSpend;
  };

  const currentDate = new Date().toLocaleDateString();
  const IdCategory = !checkBox ? selectedOption.value : idIncomes.id;

  return (
    <>
      <div className={css.transactionContainer}>
        <BtnClose onClick={onClose} />
        <h1 className={css.title}>Добавить транзакцию</h1>

        <SwitchComponent checked={checkBox} onChange={handleChange} />
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
            onClose();
          }}
        >
          {({
            errors,
            values,
            touched,
            dirty,
            handleSubmit,
            handleReset,
            isSubmitting,
            setFieldValue,
            setFieldTouched,
          }) => (
            <Form className={css.formTransactionContainer}>
              {!checkBox && (
                <div className={css.inputWrapper}>
                  <Select
                    name="selectedOption"
                    onChange={setSelectedOption}
                    options={sort(categories.expenses)}
                    placeholder="Выберите категорию"
                    styles={customStyles}
                  />
                  <SvgIcon iconName="categoryArrow" />
                </div>
              )}

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
                  onChange={date =>
                    setFieldValue('date', date.toLocaleDateString())
                  }
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
            </Form>
          )}
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
};

export default AddTransaction;
