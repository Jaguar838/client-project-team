import './LoginForm.scss';
import SvgIcon from '../../UI/SvgIcon';
import Logo from '../../UI/Logo';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import loginIcon from '../../assets/img/loginIcon.svg'

const LoginForm = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Введите верный email')
      .required('Обязательно'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательно'),
  });

  return (
    <div class="registrationContainer">
        <div class="regIcon">
        <img className={loginIcon} src={loginIcon} alt={loginIcon}/>
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
          <form class="form" autocomplete="off">
            <div class="logContainer">
              <Logo />
            </div>

            <div class="input-container email">
              <input
                class={'input'}
                type={`text`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                id="mail"
                placeholder="E-mail"
              />
              {touched.email && errors.email && (
                <p class={'error'}>{errors.email}</p>
              )}
              <SvgIcon iconName={'email'} />
            </div>
            <div class="input-container password">
              <input
                class={'input'}
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                id="password"
                placeholder="Пароль"
              />
              {touched.password && errors.password && (
                <p class={'error'}>{errors.password}</p>
              )}
              <SvgIcon iconName={'password'} />
            </div>
            
            <button
              class="button current-button"
              type={`submit`}
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
            >
                Вход
            </button>
            <button class="button" type="submit">
                Регистрация
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
