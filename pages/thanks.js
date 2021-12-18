import { Box, Text} from "@chakra-ui/react"
import Head from "next/head";
const Thanks = () => {
    return (
        <>
            <Head>
                <title>
                    THANK YOU!
                </title>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <Box textAlign={"center"}>
                <Text>Thank You. I Recieved your Message. I&apos;ll get back to you ASAP.</Text>
            </Box>
        </>
    )
}

export default Thanks;