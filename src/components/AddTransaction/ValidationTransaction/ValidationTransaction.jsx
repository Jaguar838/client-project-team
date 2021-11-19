import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import {getCategories} from '../../../redux/categories/categories-selectors';

const ValidationTransaction = () => {
    const categories = useSelector(state => getCategories(state));
    const idExpenses = categories.expenses.map(category => category.id);
    const idIncomes = categories.incomes.map(category => category.id);
    
    return Yup.object().shape({
        amount: Yup.number()
            .required('Введите, пожалуйста, сумму'),
        date: Yup.string().required('Required'),
        comment: Yup.string()
            .max(20, 'Комментарий должен быть не более 20 символов.'),
        category: Yup.string()
            .oneOf(
                [...idExpenses,...idIncomes],
                'Неверная категория'
        )
            .required('Выберите, пожалуйста, категорию'),
    })
};

export default ValidationTransaction;