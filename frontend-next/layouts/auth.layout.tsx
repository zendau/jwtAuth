import { AppProps } from 'next/app'

import Link from "next/link"
import React, {ReactNode, useState} from 'react'
import Head from "next/head";

import withAuth from "../HOC/withAuth";
import ContextLayout from "./context.layout";

import styles from "./auth.layout.module.scss"

type Props = {
    children?: ReactNode
    title?: string
}



const LoginLayout = ({children, title} : Props) => {

    const [menuStatus, setMenuStatus] = useState(false)

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <nav className={styles.navbar}>
                    <div className={styles.navbar__btn} onClick={() => setMenuStatus(!menuStatus)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.navbar__items}>
                        <div className={styles.navbar__container}>
                            <Link href="/login" ><a className={styles.navbar__item}>Login</a></Link>
                            <Link href="/register" ><a className={styles.navbar__item}>Login</a></Link>
                        </div>
                        <Link href="/logout" ><a className={styles.navbar__item}>Exit</a></Link>
                    </div>
                </nav>
            </header>
            {children}
        </>
    );
};

export default  LoginLayout;