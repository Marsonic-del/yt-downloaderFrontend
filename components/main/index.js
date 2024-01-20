"use client"
import { useState } from 'react';
import styles from './style.module.css'
import fetchData from '../../lib/api';
import Form from '../../components/form'
import Results from '../../components/results'
import Loader from '../../components/loader'
import { useTranslations } from 'next-intl';


const Main = ({ intl }) => {
    const [names, setNames] = useState([]);
    const [data, setData] = useState(null);
    const [isResult, setIsResult] = useState(false);
    const [isLoader, setIsLoader] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    //const t = useTranslations('Index');

    const handleFetchData = async (event, url) => {
        try {
            event.preventDefault();
            //setIsError(false);
            setErrorMessage('');
            setIsResult(false);
            setIsLoader(true);
            const response = await fetchData(url);
            setIsLoader(false)
            setData(response);
            setIsResult(true);
        } catch (error) {
            setIsLoader(false);
            setErrorMessage(error.message);

        }
    };

    return (
        <main className={styles.main}>
            <h1 className={styles.headerTitle}>{intl.headerTitle}</h1>
            <h2 className={styles.headerTitle}>{intl.headerQuestion}</h2>
            <div className={styles.logo}></div>
            <Form intl={intl} onSubmit={handleFetchData} />
            <span className={styles.error}>{errorMessage}</span>
            {isLoader && <Loader />}
            {data && isResult && <Results intl={intl} results={data} />}
        </main>
    )
};

export default Main;