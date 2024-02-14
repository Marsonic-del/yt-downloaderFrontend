"use client"
import { useState } from 'react';
import styles from './style.module.css'
import fetchData from '../../lib/api';
import Form from '../../components/form'
import Results from '../../components/results'
import Loader from '../../components/loader'
import MainContent from '../mainContent';
import ServiceDescription from '../serviceDescription'
import DescriptionBox from '../DescriptionBox'

const Main = ({ intl, locale }) => {


    return (
        <main className={styles.main}>
            <ServiceDescription intl={intl} locale={locale} />
            <DescriptionBox intl={intl} locale={locale} />
            <MainContent intl={intl} header={intl.insrtuctionsHeader} />
        </main>
    )
};

export default Main;