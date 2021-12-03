import Head from 'next/head'
import Card from '../components/card'
import styles from "../styles/work.module.scss"
const Projects = () => {
    const projectsArray = [
        {
            id: "1",
            name: "Plug Talk",
            text: "A free and open source community chat web app",
            stack: ["firebase", "react"],
            link: "https://github.com/teamPlugTalk/plugtalk"
        },
        {
            id: "2",
            name: "Dump Code Here",
            text: "You can dump your code here (inpired by pastebin)",
            stack: ["firebase", "next", "mongo"],
            link: "https://github.com/guchii/dumpcodehere"
        }
    ]
    return (
        <div className="container d-flex flex-wrap justify-content-center align-items-center">
            {projectsArray.map((project) => <Card pinfo={project} key={project.id} />)}
            <Head>
                <title>Shivom Srivastava | My Works</title>
            </Head>
        </div>
    )
}

export default Projects
