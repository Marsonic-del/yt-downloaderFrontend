import styles from './style.module.css'

const Button = ({ intl, disabled, onClick }) => {
    return (
        <button
            className={styles.button}
            type='submit'
            disabled={disabled}
            onClick={onClick}
        >{intl.button}</button>
    );
};

export default Button