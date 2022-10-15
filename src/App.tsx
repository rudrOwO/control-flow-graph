import { Flex } from "@chakra-ui/react"
import CodeEditor from "./components/CodeEditor"
import { useEffect, useState } from "react"

const App = () => {
  return (
    <Flex w="100vw" h="100vh" bg="gray.200">
      <Flex borderRight="1px solid black" flex={1}>
        <CodeEditor />
      </Flex>
      <Flex flex={1}></Flex>
    </Flex>
  )
}

export default App
