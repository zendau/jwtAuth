import LoginLayout from "../layouts/auth.layout";

const Index = () => {
    return (
        <LoginLayout>
            <h1>Main page</h1>
        </LoginLayout>
    );
};

export default Index;

export async function getServerSideProps(ctx) {

    if(ctx.resolvedUrl == "/") {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }

}