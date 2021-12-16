import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Image, Input, Textarea } from '@chakra-ui/react'

const Contact = () => {
  return (
    <>
      <Flex gap={"6"} direction={"row"} justifyContent={"center"} alignItems={"center"}>
        <Image src={"/naruto1.jpg"} className="me-lg-5 mb-3 mb-lg-0" alt="naruto" width={1280 * 0.3} height={720 * 0.3} />
        <Box boxShadow={"lg"} p={6} width={350} maxWidth={500}>
          <form style={{display: "flex", flexDirection:"column", gap: 10}}>
            <FormControl id='name' isRequired>
              <FormLabel>Name</FormLabel>
              <Input type={"text"} placeholder='guchiii' />
            </FormControl>
            <FormControl id='email' isRequired>
              <FormLabel>Email</FormLabel>
              <Input type={"email"} placeholder='guchiii@mail.com' />
            </FormControl>
            <FormControl id='message' isRequired>
              <FormLabel>Your Message</FormLabel>
              <Textarea placeholder='#include <iostream>...' rows={4} maxHeight={"50%"} resize={"none"}/>
            </FormControl>
            <Button colorScheme={"teal"} type={"submit"}>
              Submit Response
              </Button>
          </form>
        </Box>
      </Flex>
      {/* <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        
        <form className="card rounded p-3 shadow-lg" style={{ Height: '500px' }} name="contact" action="https://www.formingo.co/submit/9ef6d3c8-29ca-4a0b-afa0-d539a0ff7c28"
          method="POST">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" className="form-control" placeholder="guchiii srivastava" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="guchiii@mail.com" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" rows="3" name="message" className="form-control" placeholder="#include <iostream>"
              style={{ resize: "none" }}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary fw-bold">Submit Response</button>
        </form>
      </div>
      <Head>
        <title>
          Shivom Srivastava | Contact
        </title>
      </Head> */}
    </>
  )
}

export default Contact
