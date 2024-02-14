"use client"
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import Button from '../button'
import styles from './style.module.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import removeButton from '../../public/removeButton.svg'
import { YouTubeURLParser } from "@iktakahiro/youtube-url-parser"

const validationSchema = Yup.object({
  youtubeLink: Yup.string()
    .url('Invalid URL')
    .test(
      'is-youtube-link',
      'Invalid YouTube URL',
      (value) => new YouTubeURLParser(value).isValid()
    )
    .required(''),
});


const FormComponent = ({ intl, handleSubmit }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    if (!isSubmitted) {
      if (values.youtubeLink && formik.isValid) {
        console.log('submit')
        formik.submitForm();
        setIsSubmitted(true);
      }
    }

  }, [isSubmitted, formik, values.youtubeLink]);



  return (
    <search className={styles.form}>
      <form onSubmit={
        (e) => {
          e.preventDefault();
        }
      } noValidate>
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

