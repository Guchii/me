import { Box, BoxProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const niceProps: BoxProps = {
    maxWidth: 1400,
    mx: "auto",
    height: "100%",
    paddingInline: { sm: 6, "2xl": 0 },
  };
  return (
    <>
      <Header />
      <Box minHeight={"calc(100vh - 88px - 96px)"} {...niceProps}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
