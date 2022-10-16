import CodeEditor from "./components/CodeEditor"
import Analytics from "./components/Analytics"
import { Flex } from "@chakra-ui/react"
import { useRef } from "react"

const App = () => {
  const editorRef = useRef<any>(null)

  return (
    <Flex w="100vw" h="100vh" bg="#fffffe">
      <Flex borderRight="1px solid black" flex={1} position="relative">
        <CodeEditor ref={editorRef} />
      </Flex>
      <Flex flex={1}>
        <Analytics editorRef={editorRef} />
      </Flex>
    </Flex>
  )
}

export default App
