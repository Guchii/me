import { MdOutlineSegment } from "react-icons/md";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
const Header = () => {
    const router = useRouter();
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
                    <MdOutlineSegment />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <LinkItem isActive={router.pathname === "/"} href="/" text="Home" />
                        <LinkItem isActive={router.pathname === "/work"} href="/work" text="Work" />
                        <LinkItem isActive={router.pathname === "/contact"} href="/contact" text="Contact" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

function LinkItem({ isActive, href, text }) {
    const linkClassNames = classNames("nav-link", { "active": isActive })
    return (
        <li className="nav-item">
            <Link href={href}>
                <a className={linkClassNames}>{text}</a>
            </Link>
        </li>
    )
}

export default Header;
