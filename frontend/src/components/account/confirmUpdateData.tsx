import React, {useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useChangeUserDataContext} from "../../context/ChangeUserDataContext";

const ConfirmUpdateData = () => {

    const {confirmCode} = useTypedSelector(state => state.user)
    console.log(confirmCode)

    const {newPassword, newEmail} = useChangeUserDataContext()

    const [code, setCode] = useState("")

    function sendConfirmCode() {

    }

    return (
        <div>
            {confirmCode ?
                <form>
                    <input type="text" value={code} onChange={(e) => setCode(e.target.value)}/>
                    <input type="button" onClick={sendConfirmCode}/>
                </form> : ""}
            {newPassword}
            {newEmail}
        </div>
    );
};

export default ConfirmUpdateData;