import React from 'react'
import { Locale, getDictionary } from '../dictionaries';
import Privacy from '@/components/Privacy';

type Props = {
    params: {
      lang: Locale,
    }
  }
  
  export default async function PrivacyPolicy({ params: { lang } }: Props) {
    const intl = await getDictionary(lang);
    return (
      <>
        <Privacy />
      </>
    )
  }