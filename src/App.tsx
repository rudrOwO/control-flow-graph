import { Flex } from "@chakra-ui/react"
import CodeEditor from "./components/CodeEditor"
import { useRef } from "react"
import { Monaco } from "@monaco-editor/react"

const App = () => {
  const editorRef = useRef<Monaco>(null)
  // editorRef.current.getValue()

  return (
    <Flex w="100vw" h="100vh" bg="#fffffe">
      <Flex borderRight="1px solid black" flex={1} position="relative">
        <CodeEditor ref={editorRef} />
      </Flex>
      <Flex flex={1}></Flex>
    </Flex>
  )
}

export default App
