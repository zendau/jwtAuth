import { AppProps } from 'next/app'

import Link from "next/link"
import React, {ReactNode, useState} from 'react'
import Head from "next/head";

import withAuth from "../HOC/withAuth";
import ContextLayout from "./context.layout";

import Navbar from "../components/navbar/navbar";

import IPath from "../interfaces/IPath"

type Props = {
    children?: ReactNode
    title?: string
}

const publicPaths : IPath[] = [
    {
        to: "/login", name: "Login",
    },
    {
        to: "/register", name: "Register"
    }

]


const LoginLayout = ({children, title} : Props) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar paths={publicPaths}/>

            {children}
        </>
    );
};

export default  LoginLayout;