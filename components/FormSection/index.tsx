"use client"

import {useState} from 'react'
import {AxiosError} from 'axios';
import styles from './styles.module.css'
import Form from '@/components/form'
import Loader from '@/components/loader'
import fetchData from '../../lib/api';
import Results from '@/components/results'

const FormSection = ({intl}:{intl:any}) => {
    const [data, setData] = useState(null);
    const [isResult, setIsResult] = useState(false);
    const [isLoader, setIsLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFetchData = async (url: any) => {
        try {
            setErrorMessage('');
            setIsResult(false);
            setIsLoader(true);
            const response = await fetchData(url);
            setIsLoader(false)
            setData(response);
            setIsResult(true);
        } catch (err: any | AxiosError) {
          if(err.code === "ERR_BAD_REQUEST") err.message = "Sorry, Video not found"
            setIsLoader(false);
            setErrorMessage(err.message);

        }
    };
  return (
    <>
         <section className={styles.search}>
                <Form intl={intl} handleSubmit={handleFetchData} />
        </section>
        <span className={styles.error}>{errorMessage}</span>
        {isLoader && <Loader />}
        {data && isResult && <Results intl={intl} results={data} setIsResult={setIsResult} />}
    </>
  )
}

export default FormSection