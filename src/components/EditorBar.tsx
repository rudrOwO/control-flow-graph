import { Flex, Text, Image, Center } from "@chakra-ui/react"
import CFGButton, { CFGButtonProps } from "./CFGButton"

const EditorBar = (props: CFGButtonProps) => {
  const { onClick: handleClick } = props

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
      justifyContent="space-between"
    >
      <Image src="/c-logo.png" h="40px" ml="10px" />
      <Center p="5px" zIndex={2} position="absolute" w="full">
        Code Editor
      </Center>
      <CFGButton onClick={handleClick} />
    </Flex>
  )
}

export default EditorBar
