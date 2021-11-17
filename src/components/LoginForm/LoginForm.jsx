import './LoginForm.scss';
import SvgIcon from '../../UI/SvgIcon';
import Logo from '../../UI/Logo';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import loginIcon from '../../assets/img/loginIcon.svg';

const LoginForm = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup
      .string()
      .min(6)
      .max(12)
      .typeError('Должно быть строкой')
      .required('Обязательно'),
  });

  return (
    <div class="loginContainer">
      <div class="logIcon">
        <img className={'loginIcon'} src={loginIcon} alt={loginIcon} />
        <h1 class="loginTitle">Finance App</h1>
      </div>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={values => {
          console.log(values);
        }}
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
          <form class="loginForm" autocomplete="off">
            <div class="logLoginContainer">
              <Logo />
            </div>

            <div class="input-logContainer email">
              <input
                class={'logInput'}
                type={`text`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                id="mail"
                placeholder="E-mail"
              />
              {touched.email && errors.email && (
                <p class={'loginError'}>{errors.email}</p>
              )}
              <SvgIcon iconName={'email'} />
            </div>
            <div class="input-logContainer password">
              <input
                class={'logInput'}
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                id="password"
                placeholder="Пароль"
              />
              {touched.password && errors.password && (
                <p class={'loginError'}>{errors.password}</p>
              )}
              <SvgIcon iconName={'password'} />
            </div>

            <button
              class="logButton logCurrent-button"
              type={`submit`}
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
            >
              Вход
            </button>
            <button class="logButton" type="submit">
              Регистрация
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
