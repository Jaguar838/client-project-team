import PropTypes from "prop-types";

import css from './Balance.module.scss'

const BalanceComponent = ({totalBalance}) => {
    return (
        <div className={css.balanceContainer}>
            <p className={css.balanceHeadline}>Ваш баланс</p>
            <p className={css.balanceCount}>₴ {totalBalance}</p>
        </div>
    )
}

BalanceComponent.defaultProps = {
    totalBalance: 24000,
  };
  
  BalanceComponent.propTypes = {
    totalBalance: PropTypes.number.isRequired,
  };

export default BalanceComponent