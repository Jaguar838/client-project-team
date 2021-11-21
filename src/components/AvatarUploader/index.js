import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatarOperations from '../../redux/avatar/avatar-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import MainButton from '../../UI/buttons/MainButton';
import styles from './styles.module.scss';

const AvatarUploader = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const hiddenInput = useRef(null);
  const isLoading = useSelector(state => authSelectors.isLoading(state));

  const onHiddenInputClick = () => {
    hiddenInput.current.click();
  };

  const onFileChange = e => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = () => {
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append('avatar', file, file.name);
    dispatch(avatarOperations.setAvatar(formData));
    setFile(null);
  };

  return (
    <div className={styles.uploadWrapper}>
      <MainButton onClick={onHiddenInputClick} text="Выберите аватар" />
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
          {file ? (
            <div className={styles.infoWrapper}>
              <p className={styles.info}>Название файла: {file.name}</p>
              <p className={styles.info}>
                Размер: {(file.size / 1024 / 1024).toFixed(2)} Mb
              </p>
              <p className={styles.info}>Формат: {file.type}</p>
            </div>
          ) : (
            <p className={styles.placeholder}>Файл не выбран</p>
          )}
        </>
      )}
      <MainButton text="Загрузить" secondary onClick={onFileUpload} />
    </div>
  );
};

export default AvatarUploader;
