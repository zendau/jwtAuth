import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ConfirmUpdateData = () => {

    const {confirmCode} = useTypedSelector(state => state.user)
    console.log(confirmCode)
    return (
        <div>
            {confirmCode ? "true" : "false"}
        </div>
    );
};

export default ConfirmUpdateData;