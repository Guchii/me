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
                <title>Shivom Srivastava | My Works</title>
            </Head>
        </>
    )
}

export default Projects
