import { useState } from 'react';
import Switch from 'react-switch';
import styles from './styles.module.scss';

const switchStyleConfig = {
  offHandleColor: '#24cca7',
  onHandleColor: '#ff6596',
  height: 40,
  width: 80,
  handleDiameter: 40,
  uncheckedIcon: false,
  checkedIcon: false,
  offColor: '#fff',
  onColor: '#fff',
  boxShadow: '0px 10px 25px 0px #959595',
  className: styles.switch,

  //TODO
  //   uncheckedHandleIcon,
  //   checkedHandleIcon,
};

const SwitchComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.block}>
      <span className={`${styles.income} ${!isChecked && styles.checked}`}>
        Доход
      </span>
      <Switch
        onChange={onChange}
        checked={isChecked}
        height={switchStyleConfig.height}
        width={switchStyleConfig.width}
        offHandleColor={switchStyleConfig.offHandleColor}
        onHandleColor={switchStyleConfig.onHandleColor}
        // handleDiameter={switchStyleConfig.handleDiameter}
        uncheckedIcon={switchStyleConfig.uncheckedIcon}
        checkedIcon={switchStyleConfig.checkedIcon}
        offColor={switchStyleConfig.offColor}
        onColor={switchStyleConfig.onColor}
        boxShadow={switchStyleConfig.boxShadow}
        className={switchStyleConfig.className}
      />
      <span className={`${styles.expenses} ${isChecked && styles.checked}`}>
        Расход
      </span>
    </div>
  );
};

export default SwitchComponent;
