import { AppProps } from 'next/app'


import React, {ReactNode, useState} from 'react'
import Head from "next/head";

import withAuth from "../HOC/withAuth";


import Navbar from "../components/navbar/navbar";

import IPath from "../interfaces/IPath"

type Props = {
    children?: ReactNode
    title?: string
}

const paths : IPath[] = [
    {
        to: "/account", name: "Account"
    },
    {
        to: "/post/all", name: "Posts"
    },
    {
        to: "/post/create", name: "Create post"
    },
    {
        to: "/users", name: "Users"
    }

]


const AuthLayout = ({children, title} : Props) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar paths={paths} privateType={true}/>

            {children}
        </>
    );
};

export default  AuthLayout;