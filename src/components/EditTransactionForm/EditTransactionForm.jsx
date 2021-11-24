import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../redux/categories/categories-selectors';
import { getPage } from '../../redux/transactions/transactions-selectors';
import PropTypes from 'prop-types';
import ValidationEdit from './ValidationEditForm';
import { editTransaction } from '../../redux/transactions/transactions-operations';
import BtnClose from './BtnClose';
import TextInput from './TextInput';
import CommentInput from './CommentInput';
// import Select from "./Select";
import SwitchComponent from './SwitchComponent';
import MainButton from '../../UI/buttons/MainButton';
import css from './EditTransactionForm.module.scss';

import Select from 'react-select';
import customStyles from './CustomStyles/customStyles';
import SvgIcon from '../../UI/SvgIcon';

const EditTransactionForm = ({
  onClose,
  operationId,
  type,
  category,
  comment,
  amount,
}) => {
  const checked = type === '+' ? true : false;
  const checkBox = checked;
  const [selectedOption, setSelectedOption] = useState({
    value: null,
    label: '',
  });
  const categories = useSelector(state => getCategories(state));
  const page = useSelector(getPage);
  const idIncomes = categories.incomes.find(category => category.id);

  const schema = ValidationEdit();
  const dispatch = useDispatch();

  const categoryFind = category => {
    let searchQuery = category;
    let defValues = sort(categories.expenses);
    let defaultCategory = defValues.find(
      category => category.label === searchQuery,
    );

    return defaultCategory;
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

  const IdCategory = !checkBox ? selectedOption.value : idIncomes.id;

  return (
    <>
      <div className={css.transactionContainer}>
        <BtnClose onClick={onClose} />
        <h1 className={css.title}>Изменить транзакцию</h1>

        <SwitchComponent checked={checkBox} />
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
                    defaultValue={categoryFind(category)}
                    isOptionSelected={true}
                    name="selectedOption"
                    onChange={
                      !selectedOption.value
                        ? setSelectedOption(categoryFind(category))
                        : setSelectedOption
                    }
                    options={sort(categories.expenses)}
                    placeholder={categoryFind(category)}
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

EditTransactionForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditTransactionForm;
