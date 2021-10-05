import { AppProps } from 'next/app';

import "../styles/App.scss"
import ContextLayout from "../layouts/context.layout";

export default function MyApp({ Component, pageProps }: AppProps) {

    console.log("render app")
    return <ContextLayout><Component {...pageProps} /></ContextLayout>
}