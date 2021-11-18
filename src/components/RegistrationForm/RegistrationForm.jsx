import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations'
import './RegistrationForm.scss';
import SvgIcon from '../../UI/SvgIcon';
import Logo from '../../UI/Logo';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import registerIcon from '../../assets/img/registerIcon.svg'

const RegistrationForm = () => {
const dispatch = useDispatch()

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Введите верный email')
      .required('Обязательно'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательно'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('Обязательно'),
    name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
  });

  const handleSubmit = e => {
    const name = e.name
    const email = e.email
    const password = e.password
    console.log(name, email, password)
    // e.preventDefault();
    dispatch(authOperations.signUp({ email, password, name }));
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  return (
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
        }}
        validateOnBlur
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <form className="form" autoComplete="off">
            <div className="logContainer">
              <Logo className="logCon" />
            </div>

            <div className="input-container email">
              <input
                className={'input'}
                type={`text`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                id="mail"
                placeholder="E-mail"
              />
              {touched.email && errors.email && (
                <p className={'error'}>{errors.email}</p>
              )}
              <SvgIcon iconName={'email'} />
            </div>
            <div className="input-container password">
              <input
                className={'input'}
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                id="password"
                placeholder="Пароль"
              />
              {touched.password && errors.password && (
                <p className={'error'}>{errors.password}</p>
              )}
              <SvgIcon iconName={'password'} />
            </div>
            <div className="input-container password-confirm">
              <input
                className={'input'}
                type={`password`}
                name={`confirmPassword`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                id="confirm-password"
                placeholder="Подтвердите пароль"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className={'error'}>{errors.confirmPassword}</p>
              )}
              <SvgIcon iconName={'password'} />
            </div>
            <div className="progressbar"></div>
            <div className="input-container">
              <input
                className={'input'}
                type={`text`}
                name={`name`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                id="name"
                placeholder="Ваше имя"
              />
              {touched.name && errors.name && (
                <p className={'error'}>{errors.name}</p>
              )}
              <SvgIcon iconName={'name'} />
            </div>
            <button
              className="button current-button"
              type={`submit`}
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
            >
              Регистрация
            </button>
            <NavLink to="/login" className="button">
            Login
          </NavLink>
          </form>
        )}
      </Formik>
  );
};

export default RegistrationForm;