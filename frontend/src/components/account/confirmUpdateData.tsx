import React, {useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useChangeUserDataContext} from "../../context/ChangeUserDataContext";
import {useAction} from "../../hooks/useAction";

const ConfirmUpdateData = () => {

    const {confirmCode, id} = useTypedSelector(state => state.user)
    console.log(confirmCode)

    const {newPassword, newEmail} = useChangeUserDataContext()

    const [code, setCode] = useState("")

    const {SendCodeForUpdateRequest} = useAction()

    function sendConfirmCode() {
        SendCodeForUpdateRequest(id, newEmail, newPassword, code)
    }

    return (
        <div>
            {confirmCode ?
                <form>
                    <input type="text" value={code} onChange={(e) => setCode(e.target.value)}/>
                    <input type="button" onClick={sendConfirmCode} value="Send code" />
                </form> : ""}
            {newPassword}
            {newEmail}
        </div>
    );
};

export default ConfirmUpdateData;