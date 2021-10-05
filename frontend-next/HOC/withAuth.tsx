import { useRouter } from "next/router";
import {useAuthContext} from "../context/AuthContext";
const withAuth = (WrappedComponent) => {
    return (props) => {
        // checks whether we are on client / browser or server.
        if (typeof window !== "undefined") {
            const Router = useRouter();

            // If there is no access token we redirect to "/" page.

            const {authStatus} =  useAuthContext()

            if (!authStatus) {
                Router.replace("/");
                return null;
            }

            // If this is an accessToken we just render the component that was passed with all its props

            return <WrappedComponent {...props} />;
        }

        // If we are on server, return null
        return null;
    };
};

export default withAuth;