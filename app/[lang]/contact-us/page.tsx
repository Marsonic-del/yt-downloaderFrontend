import React from 'react'
import { Locale, getDictionary } from '../dictionaries';
import ContactUs from '../../../components/ContactUs';

type Props = {
    params: {
      lang: Locale,
    }
  }
  
  export default async function contactUs({ params: { lang } }: Props) {
    const intl = await getDictionary(lang);
    return ( 
      <>
        <ContactUs />
      </>
    )
  }