import { Flex, Image } from "@chakra-ui/react"

const EditorBar = () => {
  return (
    <Flex
      shadow="md"
      p="5px"
      mb="15px"
      fontSize="lg"
      fontWeight="bold"
      color="white"
      width="100%"
      bg="blue.500"
      alignItems="center"
      justifyContent="center"
    >
      <Image src="/c-logo.png" h="35px" mx="5px" />
      Code Editor
    </Flex>
  )
}

export default EditorBar
