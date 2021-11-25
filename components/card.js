import React from 'react'
import Image from 'next/image'
import Naruto from "../public/naruto1.jpg"
import styles from "../styles/card.module.scss"

function card({ pname, ptext }) {
    return (
        <div className={styles.card + " card m-2"}>
            <Image
                src={Naruto}
                alt={pname}
                className="card-img-top"
                placeholder="blur"
            />
            <div className="card-body">
                <h4 className="card-title fw-bold"> {pname}</h4>
                <p className="card-text">
                    {ptext}
                </p>
            </div>
        </div>
    )
}

card.defaultProps = {
    pname: "Project Name",
    ptext: "This is the project text"
}

export default card
