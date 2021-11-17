import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations'
import './LoginForm.scss';
import SvgIcon from '../../UI/SvgIcon';
import Logo from '../../UI/Logo';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import loginIcon from '../../assets/img/loginIcon.svg';

const LoginForm = () => {
  const dispatch = useDispatch()
  const validationLoginSchema = yup.object().shape({
    email: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательно'),
  });

    const handleSubmit = e => {
    // e.preventDefault();
      console.log(e.email)
      console.log(e.password)
      const email = e.email
      const password = e.password
    dispatch(authOperations.logIn({email, password} ));
    // setEmail('');
    // setPassword('');
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnBlur
      onSubmit={handleSubmit}
      validationLoginSchema={validationLoginSchema}
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
        <form className="loginForm" autoComplete="off">
          <div className="logLoginContainer">
            <Logo />
          </div>

          <div className="input-logContainer email">
            <input
              className={'logInput'}
              type={`text`}
              name={`email`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              id="mail"
              placeholder="E-mail"
            />
            {touched.email && errors.email && (
              <p class={'Error'}>{errors.email}</p>
            )}
            <SvgIcon iconName={'email'} />
          </div>
          <div className="input-logContainer password">
            <input
              className={'logInput'}
              type={`password`}
              name={`password`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              id="password"
              placeholder="Пароль"
            />
            {touched.password && errors.password && (
              <p class={'Error'}>{errors.password}</p>
            )}
            <SvgIcon iconName={'password'} />
          </div>

          <button
            className="logButton logCurrent-button"
            type={`submit`}
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
          >
            Вход
          </button>
          <NavLink to="/register" className="logButton">
            Register
          </NavLink>
        </form>
      )}
    </Formik>
    // </div>
  );
};

export default LoginForm;
