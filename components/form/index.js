"use client"
import Button from '../button'
import styles from './style.module.css'
import { useTranslations } from 'next-intl';
import { useFormik } from "formik";
import * as Yup from "yup";
import youtubeUrl from 'youtube-url';

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


const FormComponent = ({ intl, onSubmit }) => {
  //const t = useTranslations('Index');

  const formik = useFormik({
    initialValues: {
      youtubeLink: "",
    },
    validationSchema,
  });

  const { errors, values, handleChange } = formik;

  return (
    <form onSubmit={(e) => onSubmit(e, values.youtubeLink)} className={styles.form}>
      <div className={styles.container}>
        <input
          type="text"
          name='youtubeLink'
          value={values.youtubeLink}
          className={styles.input}
          placeholder={intl.placeholder}
          onChange={handleChange}
        />
        <Button
          intl={intl}
          disabled={errors.youtubeLink || values.youtubeLink === ''}
        >
        </Button>
      </div>
      {errors.youtubeLink && <span className={styles.error}>{errors.youtubeLink}</span>}
    </form>
  )
}

export default FormComponent

