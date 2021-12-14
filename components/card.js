import React from 'react'
import Image from 'next/image'
import Naruto from "../public/naruto1.jpg"
import Firebase from "../public/firebase.svg"
import ReactIcon from "../public/react.svg"
import styles from "../styles/card.module.scss"

function Card({ pinfo }) {
    return (
        <div className={styles.card + " card m-2 shadow"} onClick={()=>window.open(pinfo.link, "_blank")}>
            <div className="card-body">
                <h4 className="card-title fw-bold"> {pinfo.name}</h4>
                <p className="card-text">
                    {pinfo.text}
                </p>
            </div>
            {/* <div className="bg-white d-flex position-absolute top-0 end-0 rounded ps-1 pe-2 py-2">
                <Image src={Firebase} alt="icon" height="30" width="30" />
                <Image src={ReactIcon} alt="icon" height="30" width="30" />
            </div> */}
        </div>
    )
}

Card.defaultProps = {
    pinfo: {
        name: "Project Name",
        text: "This is the project text"
    }
}

export default Card
