import SvgIcon from '../SvgIcon';

import css from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={css.LogoContainer}>
            <SvgIcon iconName="logo" />
            <p className={css.logoText}>Wallet</p>
        </div>
    )
}

export default Logo