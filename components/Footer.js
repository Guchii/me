import {AiTwotoneHeart, AiFillGithub, AiFillInstagram, AiFillMail} from 'react-icons/ai'
import {FaSteam} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="container-fluid d-flex flex-column flex-lg-row align-content-center justify-content-between px-5 py-4 flex-wrap text-center">
            <div className="d-flex justify-content-between fs-2 footer__icons">
                <AiFillInstagram/>
                <AiFillGithub/>
                <AiFillMail/>
                <FaSteam/>
            </div>
            <span className="fs-5">made with <AiTwotoneHeart color="red"/> </span>
        </div>
    )
}

export default Footer
