import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Card from '../components/card'
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
        <>
            <Flex gap={5} wrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
                {projectsArray.map((project) => <Card pinfo={project} key={project.id} />)}
            </Flex>
            <Head>
                <title>Projects | Shivom Srivastava</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍜</text></svg>"></link>
            </Head>
        </>
    )
}

export default Projects
