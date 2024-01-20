import React from 'react';
import styles from './style.module.css';
import LanguageSwitcher from '../languageSwitcher';

const Header = () => {
    return (
        <header className={styles.header}>
            <LanguageSwitcher />
        </header>
    )
}

export default Header