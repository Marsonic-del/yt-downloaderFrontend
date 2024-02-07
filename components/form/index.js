"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import Button from '../button'
import styles from './style.module.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import youtubeUrl from 'youtube-url';
import removeButton from '../../public/removeButton.svg'

const validationSchema = Yup.object({
  youtubeLink: Yup.string()
    .url('Invalid URL')
    .test(
      'is-youtube-link',
      'Invalid YouTube URL',
      (value) => value && (value.startsWith('https://www.youtube.com/shorts/') || youtubeUrl.valid(value))
    )
    .required(''),
});


const FormComponent = ({ intl, handleSubmit }) => {
  //const [isValidYoutubeLink, setIsValidYoutubeLink] = useState(false);
  const formRef = useRef();

  const formik = useFormik({
    initialValues: {
      youtubeLink: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values.youtubeLink);
    },
  });

  const { errors, values, handleChange } = formik;

  useEffect(() => {
    if (values.youtubeLink && formik.isValid) {
      formik.submitForm(); // Use submitForm provided by Formik
    }
  }, [formik.isValid, values.youtubeLink]);



  return (
    <search className={styles.form}>
      <form ref={formRef} onSubmit={formik.onSubmit} >
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <input
              type="text"
              name='youtubeLink'
              autoComplete="off"
              value={values.youtubeLink}
              className={styles.input}
              placeholder={intl.placeholder}
              onChange={handleChange}
            />
            <Image
              src={removeButton}
              width={25}
              height={25}
              alt={intl.removeInputTextButton}
              onClick={formik.handleReset}
              className={styles.removeButton}
            />
          </div>
          <Button
            intl={intl}
            disabled={errors.youtubeLink || values.youtubeLink === ''}
            onClick={() => formik.submitForm()}
          >
          </Button>
        </div>
        {<span className={`${styles.error} ${errors.youtubeLink && styles.visible}`}>{errors.youtubeLink}</span>}
      </form>
    </search>

  )
}

export default FormComponent

