import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import {useAuthContext} from "../../context/AuthContext";
import ErrorMessage from "../../components/UI/ErrorMessage";

import "./auth.scss"
import TextInput from "../../components/UI/textInput";
import {useHistory} from "react-router-dom";

import { Formik } from 'formik';
import IFormikElements from "../../interfaces/formikElements";

const Login : React.FC = () => {

    const state = useTypedSelector(state => state.user)


    const {userAuth} = useAction()


    const {setAuthStatus} =  useAuthContext()

    const {push} = useHistory()


    const formikValidate = (values: IFormikElements) => {
            const errors : IFormikElements = {}
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!values.password) {
                errors.password = 'Password is required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        }

    const formikSubmit = (values: IFormikElements, {setSubmitting}: any ) => {
        console.log(values, setSubmitting)
        setSubmitting(false)
        userAuth(values.email, values.password, setAuthStatus, "login", push)
    }


    return (
        <section className="auth-container">
            <div className="auth__wrapper">
                <div className="auth__form-container">
                    <ErrorMessage message={state.error} timeout={5000} />
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={formikValidate}
                        onSubmit={formikSubmit}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleSubmit,
                              isSubmitting,

                          }) => (
                            <form onSubmit={handleSubmit}>
                                <ErrorMessage message={
                                    errors.email && touched.email && errors.email ||
                                    errors.password && touched.password && errors.password
                                } timeout={5000} />
                                <TextInput
                                    type="email"
                                    name="email"
                                    title="Email"
                                    id="email"
                                    letters={30}
                                    value={values.email}
                                    setValue={handleChange}
                                />
                                <TextInput
                                    type="password"
                                    name="password"
                                    title="Password"
                                    id="pass"
                                    letters={30}
                                    value={values.password}
                                    setValue={handleChange}
                                />
                                <button className="btn auth__btn" type="submit" disabled={isSubmitting}>
                                    Login
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default  Login