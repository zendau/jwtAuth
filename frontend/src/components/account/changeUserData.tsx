import React, {FormEvent, useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import {useChangeUserDataContext} from "../../context/ChangeUserDataContext";

const ChangeUserData : React.FC = () => {

    const {email, id, error} = useTypedSelector(state => state.user)

    const [userEmail, setUserEmail] = useState(email)

    useEffect(() => {
        setUserEmail(email)
    }, [email])

    const {userDataUpdateRequest} = useAction()

    const {setNewEmail, newPassword, setNewPassword} = useChangeUserDataContext()


    function sendReqToUpdateData(event: FormEvent) {
        event.preventDefault()
        userDataUpdateRequest(id, userEmail)
        setNewEmail(userEmail)
    }

    return (
        <div>
            <h1>Change user email and password</h1>
            <h2>{error}</h2>
            <form>
                <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                <input type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="new password" />
                <input type="button" onClick={sendReqToUpdateData} value="send data" />
            </form>
            
        </div>
    );
};

export default ChangeUserData;