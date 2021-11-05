import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import ("../node_modules/bootstrap/dist/js/bootstrap");
    }, []);
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
