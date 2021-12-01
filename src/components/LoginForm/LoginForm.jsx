import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Toaster } from 'react-hot-toast';

import './LoginForm.scss';
import SvgIcon from '../../UI/SvgIcon';
import Logo from '../../UI/Logo';
import { Formik } from 'formik';
import * as yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { GoogleIcon } from '../../UI/buttons/GoogleButton/googleIcon'

const LoginForm = () => {
  const dispatch = useDispatch();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const onCLick = e => {
    e.preventDefault();
    setIsPasswordHidden(!isPasswordHidden);
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup
      .string()
      .min(6)
      .typeError('Должно быть строкой')
      .required('Обязательно'),
  });

  const handleSubmit = e => {
    // e.preventDefault();
    const email = e.email;
    const password = e.password;
    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnBlur
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      onCLick={onCLick}
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
              <p className={'loginError'}>{errors.email}</p>
            )}
            <SvgIcon iconName={'email'} />
          </div>
          <div className="input-logContainer password">
            <input
              className={'logInput'}
              type={isPasswordHidden ? 'password' : 'text'}
              name={`password`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              id="password"
              placeholder="Пароль"
              autoComplete="off"
            />

            <button className={'loginIconEye'} onClick={onCLick}>
              {isPasswordHidden ? <BsEye /> : <BsEyeSlash />}
            </button>

            {touched.password && errors.password && (
              <p className={'loginError'}>{errors.password}</p>
            )}
            <SvgIcon iconName={'password'} />
          </div>

          <Toaster
            toastOptions={{
              error: {
                style: {
                  background: '#ffffff',
                  color: '#000000',
                },

                duration: 3000,
              },
            }}
            containerStyle={{
              top: 115,
              left: 260,
            }}
          />

          <button
            className="logButton logCurrent-button"
            type={`submit`}
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
          >
            Вход
          </button>

          <button className="logButton google-button" type={`submit`}>
            <GoogleIcon svg="svgGoogle" />
            Google
          </button>

          <NavLink to="/register" className="logButton">
            Регистрация
          </NavLink>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
