import React from 'react'
import { Locale, getDictionary } from '../dictionaries';
import TermsUsage from '@/components/termsOfUse';

type Props = {
    params: {
      locale: Locale,
    }
  }
  
  export default async function TermsOfUse({ params: { locale } }: Props) {
    const intl = await getDictionary(locale);
    return (
     
      <>
        <TermsUsage />
      </>
    )
  }