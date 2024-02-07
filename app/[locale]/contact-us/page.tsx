import React from 'react'
import { Locale, getDictionary } from '../dictionaries';
import ContactUs from '@/components/ContactUs';

type Props = {
    params: {
      locale: Locale,
    }
  }
  
  export default async function contactUs({ params: { locale } }: Props) {
    const intl = await getDictionary(locale);
    return ( 
      <>
        <ContactUs />
      </>
    )
  }