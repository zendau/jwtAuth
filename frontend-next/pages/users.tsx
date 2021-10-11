import AuthLayout from "../layouts/auth.layout";
import Link from "next/link";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";
import {useEffect} from "react";

import styles from "../styles/users.module.scss"

const Users = () => {

    const {users} = useTypedSelector(state => state.user)

    const {getAllUsers} = useAction()

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <AuthLayout>
            <section className={styles['users-container']}>
                <ul className={styles.users__list}>
                    {users ? users.map((user, index) =>

                        <li className={styles.user}  key={user.email}>
                            <p className={styles["user__number"]}>{index+1}.</p>
                            <Link

                                key={user.email}
                                href={`/user/${user.id}`}
                            >
                                <a className={styles["user__email"]}>{user.email}</a>
                            </Link>
                        </li>
                    ) : <h1 className={styles["message-info"]}>No have users</h1>}
                </ul>
            </section>
        </AuthLayout>
    );
};

export default Users;