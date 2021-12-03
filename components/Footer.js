import {
    AiTwotoneHeart,
    AiFillGithub,
    AiFillInstagram,
    AiFillMail,
} from "react-icons/ai";
import { FaSteam } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import styles from "./footer.module.scss"
import { useRouter } from "next/router";
const Footer = () => {
    const router = useRouter()
    const rd = url => window.open(url, "_blank")
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-between px-5 py-4 text-center">
            <div className={"d-flex justify-content-between fs-2 mb-2 mb-lg-0 " + styles.icons}>
                <AiFillInstagram onClick={() => rd("https://instagram.com/guchi_xd/")} className={styles.icon} />
                <AiFillGithub onClick={() => rd("https://github.com/guchii")} className={styles.icon} />
                <AiFillMail onClick={() => router.push("/contact")} className={styles.icon} />
                <FaSteam onClick={() => rd("https://steamcommunity.com/id/guchixd/")} className={styles.icon} />
            </div>
            <span className="fw-bold">
                made with <AiTwotoneHeart color="red" />{", "}<SiNextdotjs className="ms-1" />
            </span>
        </div>
    );
};

export default Footer;
