import 'server-only'

export type Locale = keyof typeof dictionaries

const dictionaries = {
    ar: () => import('./dictionaries/messages/ar.json').then((module) => module.default),
    bg: () => import('./dictionaries/messages/bg.json').then((module) => module.default),
    'en-GB': () => import('./dictionaries/messages/en_GB.json').then((module) => module.default),
    'en-US': () => import('./dictionaries/messages/en_US.json').then((module) => module.default),
    en: () => import('./dictionaries/messages/en_US.json').then((module) => module.default),
    nl: () => import('./dictionaries/messages/nl.json').then((module) => module.default),
    ru: () => import('./dictionaries/messages/ru.json').then((module) => module.default),
    cz: () => import('./dictionaries/messages/cz.json').then((module) => module.default),
    de: () => import('./dictionaries/messages/de.json').then((module) => module.default),
    dk: () => import('./dictionaries/messages/dk.json').then((module) => module.default),
    ee: () => import('./dictionaries/messages/ee.json').then((module) => module.default),
    es: () => import('./dictionaries/messages/es.json').then((module) => module.default),
    fi: () => import('./dictionaries/messages/fi.json').then((module) => module.default),
    fr: () => import('./dictionaries/messages/fr.json').then((module) => module.default),
    hu: () => import('./dictionaries/messages/hu.json').then((module) => module.default),
    it: () => import('./dictionaries/messages/it.json').then((module) => module.default),
    lt: () => import('./dictionaries/messages/lt.json').then((module) => module.default),
    lv: () => import('./dictionaries/messages/lv.json').then((module) => module.default),
    no: () => import('./dictionaries/messages/no.json').then((module) => module.default),
    pl: () => import('./dictionaries/messages/pl.json').then((module) => module.default),
    pt: () => import('./dictionaries/messages/pt.json').then((module) => module.default),
    se: () => import('./dictionaries/messages/se.json').then((module) => module.default),
    in: () => import('./dictionaries/messages/in.json').then((module) => module.default),
    jp: () => import('./dictionaries/messages/jp.json').then((module) => module.default),
    zh: () => import('./dictionaries/messages/zh.json').then((module) => module.default),
    'zh-CN': () => import('./dictionaries/messages/zh.json').then((module) => module.default),
   ' zh-SG': () => import('./dictionaries/messages/zh.json').then((module) => module.default),
    'zh-TW': () => import('./dictionaries/messages/zht.json').then((module) => module.default),
    'zh-HK': () => import('./dictionaries/messages/zht.json').then((module) => module.default),
    el: () => import('./dictionaries/messages/el.json').then((module) => module.default),
    he: () => import('./dictionaries/messages/he.json').then((module) => module.default),
    id: () => import('./dictionaries/messages/id.json').then((module) => module.default),
    ko: () => import('./dictionaries/messages/ko.json').then((module) => module.default),
    ro: () => import('./dictionaries/messages/ro.json').then((module) => module.default),
    sl: () => import('./dictionaries/messages/sl.json').then((module) => module.default),
    sk: () => import('./dictionaries/messages/sk.json').then((module) => module.default),
    th: () => import('./dictionaries/messages/th.json').then((module) => module.default),
    tr: () => import('./dictionaries/messages/tr.json').then((module) => module.default),
    uk: () => import('./dictionaries/messages/uk.json').then((module) => module.default),
    vi: () => import('./dictionaries/messages/vi.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
    if(locale in dictionaries)  return dictionaries[locale]();
    return dictionaries['en']();
   }