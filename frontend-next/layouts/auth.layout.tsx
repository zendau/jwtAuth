import { AppProps } from 'next/app'


import React, { ReactNode } from 'react'
import {Head} from "next/document";

type Props = {
    children?: ReactNode
    title?: string
}

function Link(props: { href: string, children: React.ReactNode }) {
    return null;
}

const LoginLayout = ({children, title} : Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <nav>
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                    <Link href="/register">
                        <a>Register</a>
                    </Link>
                </nav>
            </header>
            {children}
            <footer>
                <hr />
                <span>I'm here to stay (Footer)</span>
            </footer>
        </div>
    );
};

export default LoginLayout;