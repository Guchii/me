import { Badge, Box, Flex, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'

function Card({ pinfo }) {
    return (
        <>
            <LinkBox>
                <LinkOverlay href={pinfo.link} isExternal />
                <Flex justifyContent={"center"}
                    direction={"column"}
                    boxShadow={"lg"}
                    width={400}
                    maxHeight={200}
                    p={5}
                    gap={2}
                >
                    <Heading as="h1" size={"md"} color={"teal"}>{pinfo.name}</Heading>
                    <Text noOfLines={4}>
                        {pinfo.text}
                    </Text>
                    <Flex gap={2}>
                        {pinfo.stack.map(ele => <Badge colorScheme={"purple"}>{ele}</Badge>)}
                    </Flex>
                </Flex>
            </LinkBox>

        </>
    )
}

Card.defaultProps = {
    pinfo: {
        name: "Project Name",
        text: "This is the project text"
    }
}

export default Card
