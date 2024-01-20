import 'server-only'

export type Locale = keyof typeof dictionaries

const dictionaries = {
    en: () => import('./dictionaries/messages/en.json').then((module) => module.default),
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
}

export const getDictionary = async (locale: Locale) => {
    return dictionaries[locale]()}