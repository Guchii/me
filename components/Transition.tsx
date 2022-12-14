import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const Transition = ({ children }: { children: ReactNode }) => {
  const { asPath } = useRouter();
  const variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.3,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  console.log(asPath);
  return (
    <Box minH={"inherit"} overflow="hidden" w="full" as={motion.div}>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Box
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
          minH={"inherit"}
          as={motion.div}
          key={asPath}
        >
          {children}
        </Box>
      </AnimatePresence>
    </Box>
  );
};

export default Transition;
