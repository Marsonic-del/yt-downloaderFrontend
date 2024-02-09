import React from 'react'
import { Locale, getDictionary } from '../dictionaries';
import TermsUsage from '@/components/termsOfUse';

type Props = {
    params: {
      lang: Locale,
    }
  }
  
  export default async function TermsOfUse({ params: { lang } }: Props) {
    const intl = await getDictionary(lang);
    return (
      <>
        <TermsUsage />
      </>
    )
  }