import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
    return (
        <div className="d-flex flex-column align-content-center min-vh-100 justify-content-between">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
