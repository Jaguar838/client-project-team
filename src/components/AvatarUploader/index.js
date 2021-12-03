import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatarOperations from '../../redux/avatar/avatar-operations';
import authSelectors from '../../redux/auth/auth-selectors';
// import MainButton from '../../UI/buttons/MainButton';
import styles from './styles.module.scss';

const AvatarUploader = ({ onClosePopup }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const hiddenInput = useRef(null);
  const isLoading = useSelector(state => authSelectors.isLoading(state));
  const fileSizeLimit = 2 * 1024 * 1024;

  const onHiddenInputClick = () => {
    setError(null);
    hiddenInput.current.click();
  };

  const onFileChange = e => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = () => {
    if (!file) {
      setError('Выберите файл для загрузки');
      return;
    }

    const type = file.type.split('/').pop().toLowerCase().trim();

    if (!['png', 'jpg', 'jpeg'].includes(type)) {
      setError('Неверный формат файла');
      setFile(null);
      return;
    }

    if (file?.size > fileSizeLimit) {
      setError('Размер файла превышает лимит 2 Мб');
      setFile(null);
      return;
    }

    const formData = new FormData();
    formData.append('avatar', file, file.name);
    dispatch(avatarOperations.setAvatar(formData));
    setFile(null);
    onClosePopup();
  };

  return (
    <div className={styles.uploadWrapper}>
      <button
        className={styles.uploadButton}
        type="button"
        onClick={onHiddenInputClick}
      >
        Выберите аватар
      </button>
      <input
        className={styles.uploadInput}
        type="file"
        onChange={onFileChange}
        ref={hiddenInput}
      />
      {isLoading ? (
        <p className={styles.placeholder}>Загружаем...</p>
      ) : (
        <>
          {error && <p className={styles.placeholder}>{error}</p>}
          {file && !error ? (
            <div className={styles.infoWrapper}>
              <p className={styles.info}>Название файла: {file.name}</p>
              <p className={styles.info}>
                Размер: {(file.size / 1024 / 1024).toFixed(2)} Mb
              </p>
              <p className={styles.info}>Формат: {file.type}</p>
            </div>
          ) : (
            !error && <p className={styles.placeholder}>Файл не выбран</p>
          )}
        </>
      )}
      <button className={styles.submitButton} onClick={onFileUpload}>
        Загрузить
      </button>
    </div>
  );
};

export default AvatarUploader;
