"use client"
import { useState } from 'react';
import styles from './style.module.css'
import fetchData from '../../lib/api';
import Form from '../../components/form'
import Results from '../../components/results'
import Loader from '../../components/loader'
import MainContent from '../mainContent';

const Main = ({ intl }) => {
    const [data, setData] = useState(null);
    const [isResult, setIsResult] = useState(false);
    const [isLoader, setIsLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFetchData = async (event, url) => {
        try {
            event.preventDefault();
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
            <div className={styles.logo}></div>
            <Form intl={intl} onSubmit={handleFetchData} />
            <span className={styles.error}>{errorMessage}</span>
            {isLoader && <Loader />}
            {data && isResult && <Results intl={intl} results={data} />}
            <h1 className={styles.header}>{intl.contentTitle}</h1>
            <MainContent intl={intl} />


        </main>
    )
};

export default Main;