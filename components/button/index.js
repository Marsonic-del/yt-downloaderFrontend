"use client"
import { useState, useEffect } from 'react';
import styles from './style.module.css'
import { GoArrowRight } from "react-icons/go";
import { useTranslations } from 'next-intl';

const Button = ({ intl, disabled }) => {
    const [windowWidth, setWindowWidth] = useState(0);
    //const t = useTranslations('Index');

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
        return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
    }, [])

    const button = windowWidth > 768 ? intl.button : '';
    const iconSize = windowWidth > 768 ? '1.8em' : '3em';
    return (
        <button
            className={styles.button}
            type='submit'
            disabled={disabled}
        >{button}<GoArrowRight size={iconSize} style={{ fontWeight: 'bold' }} />

        </button>
    );
};

// export const getServerSideProps = async ({ locale }) => {
//     return {
//         props: {
//             messages: await import(`../../messages/${locale}/.json`).default,
//         },
//     };
// };

export default Button