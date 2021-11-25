import {
    AiTwotoneHeart,
    AiFillGithub,
    AiFillInstagram,
    AiFillMail,
} from "react-icons/ai";
import { FaSteam, FaBootstrap, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Link from "next/link"
import styles from "./footer.module.scss"
const Footer = () => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-between px-5 py-4 text-center">
            <div className={"d-flex justify-content-between fs-2 mb-2 mb-lg-0 " + styles.icons}>
                <a href="https://instagram.com/guchi_xd/" target="_blank" rel="noreferrer"><AiFillInstagram className={styles.icon} /></a>
                <a href="https://github.com/guchii" target="_blank" rel="noreferrer"><AiFillGithub className={styles.icon} /></a>
                <Link href="/contact"><a><AiFillMail className={styles.icon} /></a></Link>
                <a href="https://steamcommunity.com/id/guchixd/" target="_blank" rel="noreferrer"><FaSteam className={styles.icon} /></a>
            </div>
            <span className="fw-bold">
                made with <AiTwotoneHeart color="red" />{", "}<SiNextdotjs className="ms-1" />
            </span>
        </div>
    );
};

export default Footer;
