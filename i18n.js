// import { notFound } from "next/navigation";
// import { getRequestConfig } from 'next-intl/server';
// import { useParams } from 'next/navigation'

// const par = useParams();
// console.log('par: ', par)

// // Can be imported from a shared config
// const locales = ['en', 'ru', 'pl', 'hu', 'cz', 'de', 'fr', 'it', 'es', 'pt', 'dk', 'no', 'fi', 'se', 'nl', 'lv', 'lt', 'ee',];

// export default getRequestConfig(async ({ locale }) => {
//     // Validate that the incoming `locale` parameter is valid
//     if (!locales.includes(locale)) notFound();

//     return {
//         messages: (await import(`./messages/${locale}.json`)).default
//     };
// });