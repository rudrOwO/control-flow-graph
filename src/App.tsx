import { Flex } from "@chakra-ui/react"
import CodeEditor from "./components/CodeEditor"
import { useState } from "react"

const App = () => {
  return (
    <Flex w="100vw" h="100vh" bg="#fffffe">
      <Flex
        borderRight="1px solid black"
        flex={1}
        bg="#fffffe"
        position="relative"
      >
        <CodeEditor />
      </Flex>
      <Flex flex={1}></Flex>
    </Flex>
  )
}

export default App
