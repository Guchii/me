import { MdOutlineSegment } from "react-icons/md";
import Link from "next/link";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-4 border-top border-5 border-primary">
            <div className="container-fluid">
                <a className="navbar-brand"
                >Shivom Srivastava</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <MdOutlineSegment />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/work">
                                <a className="nav-link">My Work</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link">Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
