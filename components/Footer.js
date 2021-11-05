import {
    AiTwotoneHeart,
    AiFillGithub,
    AiFillInstagram,
    AiFillMail,
} from "react-icons/ai";
import { FaSteam, FaBootstrap, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
const Footer = () => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-between  px-5 py-4 text-center">
            <div className="d-flex justify-content-between fs-2 footer__icons mb-2 mb-lg-0">
                <AiFillInstagram />
                <AiFillGithub />
                <AiFillMail />
                <FaSteam />
            </div>
            <span className="fs-5">
                made with <FaBootstrap color="purple" />,{" "}
                <FaReact color="blue" /> ,
                <SiNextdotjs />, <AiTwotoneHeart color="red" />
            </span>
        </div>
    );
};

export default Footer;
