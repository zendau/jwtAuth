import AuthLayout from "../layouts/auth.layout";
import {ChangeUserDataContext} from "../context/ChangeUserDataContext";
import ChangeUserData from "../components/account/changeUserData";
import ConfirmUpdateData from "../components/account/confirmUpdateData";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";
import {useEffect, useState} from "react";

import Link from "next/link";

import styles from "../styles/account.module.scss"

const Account = () => {

    const state = useTypedSelector(state => state.user)

    const [loadMessage, setLoadMessage] = useState("")


    const {getAllUsers} = useAction()

    useEffect(() => {
        setLoadMessage("")
    }, [state.users])

    function getUsers() {
        getAllUsers()
        setLoadMessage("Wait, users are download")
    }

    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const [changeDataStatus, setChangeDataStatus] = useState(true)

    return (
        <AuthLayout>
            <ChangeUserDataContext.Provider value={{newEmail, setNewEmail, newPassword, setNewPassword}}>

                <section className={styles['account-container']}>
                    <div className={styles['account__wrapper']}>
                        <h1 className={styles['account__main-title']}>{state.email}'s account</h1>
                        <h2 className={styles['account__status']}>Your account is {state.isActivate ? "activated": "not activated"}</h2>
                        <Link href={`/user/${state.id}`}><a className={`btn ${styles['account__get-posts']}`}>Get only your posts</a></Link>

                        {
                            changeDataStatus ?
                                <ChangeUserData setStatus={setChangeDataStatus}/> :
                                <ConfirmUpdateData/>
                        }



                    </div>
                </section>
            </ChangeUserDataContext.Provider>
        </AuthLayout>
    );
};

export default Account;