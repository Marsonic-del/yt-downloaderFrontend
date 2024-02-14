import Link from 'next/link';
import ReactDOMServer from 'next/dist/compiled/react-dom/cjs/react-dom-server-legacy.browser.development';
// prod mode `next/dist/build/noop-react-dom-server-legacy`

export const formats = ['MP3', 'MP4', 'MP4A', 'Webm', '3GP', 'HD'];

export const embedLink = (str:string, locale: string) => {
    let result = str;

    for (let format of formats) {
        if (result.includes(format)) {
            const linkElement = <Link href={`/${locale}/formats/${format.toLowerCase()}`}>{format}</Link>;
            const linkString = ReactDOMServer.renderToString(linkElement);
            result = result.replace(format, linkString);
        }
    }

    return result;
};