import React from 'react'
import { Locale, getDictionary } from '../dictionaries';
import Privacy from '@/components/Privacy';

type Props = {
    params: {
      locale: Locale,
    }
  }
  
  export default async function PrivacyPolicy({ params: { locale } }: Props) {
    const intl = await getDictionary(locale);
    return (
      <>
        <Privacy />
      </>
    )
  }