import Head from 'next/head'
import Card from '../components/card'
import styles from "../styles/work.module.scss"
const Projects = () => {
    return (
        <div className="container d-flex flex-wrap justify-content-center align-items-center">
                <Card pname="Plug Talk" ptext="A free and open source community chat web app" />
                <Card pname="Dump Code Here" ptext="You can dump your code here (inpired by pastebin)" />
            <Head>
                <title>Shivom Srivastava | My Works</title>
            </Head>
        </div>
    )
}

export default Projects
