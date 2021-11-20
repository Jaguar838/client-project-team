import { useState } from 'react';
import Logo from '../Logo'
import UserMenu from './UserMenu';
import PopupLogout from './PopupLogout';
import css from './Header.module.scss'



const HeaderComponent = () => {
   
    const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
    
    const toggleModal = () => {
        
        setIsModalLogoutOpen(!isModalLogoutOpen);
    };

    return (
        <div className={css.background}>
            <div className={css.headerContainer}>
            <Logo />
            <UserMenu onClick={toggleModal}/>
            {isModalLogoutOpen && (
                <PopupLogout onClose={toggleModal}/>
            )}
        </div>
        </div>
    )
}

export default HeaderComponent;