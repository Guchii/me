import { motion } from "framer-motion";
import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps, router }) {
    useEffect(() => {
        import("../node_modules/bootstrap/dist/js/bootstrap");
    }, []);
    return (
        <Layout>
            <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
                pageInitial: {
                    opacity: 0
                },
                pageAnimate: {
                    opacity: 1
                }
            }}>
                <Component {...pageProps} />
            </motion.div>
        </Layout>
    );
}

export default MyApp;
