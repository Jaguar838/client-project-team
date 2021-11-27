import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import './RegistrationForm.scss';
import SvgIcon from '../../UI/SvgIcon';
import Logo from '../../UI/Logo';
import { Formik } from 'formik';
import * as yup from 'yup';
import PasswordStrengthMete from './PasswordStrengthMeter';
import { Toaster } from 'react-hot-toast';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const RegistrationForm = () => {
  const [password, setPassword] = useState('');
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
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('Обязательно'),
    name: yup
      .string()
      .min(1)
      .max(15)
      .typeError('Должно быть строкой')
      .required('Обязательно'),
  });

  const handleSubmit = e => {
    const name = e.name;
    const email = e.email;
    const password = e.password;
    dispatch(authOperations.signUp({ email, password, name }));
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
              type={isPasswordHidden ? 'password' : 'text'}
              name={`password`}
              onChange={handleChange}
              onInput={e => setPassword(e.target.value)}
              onBlur={handleBlur}
              value={values.password}
              id="password"
              placeholder="Пароль"
              autoComplete="off"
            />

            <button className={'iconEye'} onClick={onCLick}>
              {isPasswordHidden ? <BsEye /> : <BsEyeSlash />}
            </button>

            {touched.password && errors.password && (
              <p className={'error'}>{errors.password}</p>
            )}
            <PasswordStrengthMete password={password} />
            <SvgIcon iconName={'password'} />
          </div>
          <div className="input-container password-confirm">
            <input
              className={'input'}
              type={isPasswordHidden ? 'password' : 'text'}
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

          <button className="button google-button" type={`submit`}>
            Google
          </button>

          <NavLink to="/login" className="button">
            Вход
          </NavLink>
          <Toaster
            toastOptions={{
              success: {
                style: {
                  background: '#ffffff',
                  color: '#000000',
                },
                duration: 8000,
              },
              error: {
                style: {
                  background: '#ffffff',
                  color: '#000000',
                },

                duration: 3000,
              },
            }}
            containerStyle={{
              top: 0,
              left: 260,
            }}
          />
        </form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
