import Header from "./Header";
import "@fontsource/staatliches";
import Footer from "./Footer";
import { Box, Flex } from '@chakra-ui/react'
const Layout = ({ children }) => {
    return (
        <>
            <Flex direction={"column"} minHeight="100vh" maxWidth={"1400px"} marginX={"auto"} justifyContent={"space-between"} >
                <Header />
                <Box padding={10}>
                    {children}
                </Box>
                <Footer />
            </Flex>
        </>
    )

};

export default Layout;
