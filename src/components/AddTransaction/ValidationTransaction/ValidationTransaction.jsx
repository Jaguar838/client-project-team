import * as Yup from 'yup';
import { data } from "../../../_backend-mock/categories.json";

const categories = data.map(category => category.color)

const ValidationTransaction =
    Yup.object().shape({
        amount: Yup.number()
            .required('Required'),
        date: Yup.string(),
        comment: Yup.string()
            .max(20, 'Должно быть не более 20 символов.'),
        category: Yup.string()
            .oneOf(
                categories,
                'Неверная категория'
            ),
    });

export default ValidationTransaction;