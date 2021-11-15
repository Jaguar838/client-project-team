import './RegistrationForm.scss';
import SvgIcon from '../../UI/SvgIcon';
import Logo from '../../UI/Logo';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import registerIcon from '../../assets/img/registerIcon.svg'

const RegistrationForm = () => {
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

  return (
    <div class="registrationContainer">
        <div class="regIcon">
        <img className={'registerIcon'} src={registerIcon} alt={registerIcon}/>
        </div>
      
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
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
            <div class="input-container password-confirm">
              <input
                class={'input'}
                type={`password`}
                name={`confirmPassword`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                id="confirm-password"
                placeholder="Подтвердите пароль"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p class={'error'}>{errors.confirmPassword}</p>
              )}
              <SvgIcon iconName={'password'} />
            </div>
            <div class="progressbar"></div>
            <div class="input-container">
              <input
                class={'input'}
                type={`text`}
                name={`name`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                id="name"
                placeholder="Ваше имя"
              />
              {touched.name && errors.name && (
                <p class={'error'}>{errors.name}</p>
              )}
              <SvgIcon iconName={'name'} />
            </div>
            <button
              class="button current-button"
              type={`submit`}
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
            >
              Регистрация
            </button>
            <button class="button" type="submit">
              Вход
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
