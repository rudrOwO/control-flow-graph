import CodeEditor from "./components/CodeEditor"
import Analytics from "./components/Analytics"
import { Flex, useToast } from "@chakra-ui/react"
import { useRef, useEffect } from "react"

const App = () => {
  const toast = useToast()
  const editorRef = useRef<any>(null)

  useEffect(() => {
    toast({
      title: "Note",
      position: "bottom",
      description: "This project is under active development",
      status: "warning",
      duration: 4000,
      isClosable: true,
      containerStyle: {
        fontSize: "lg",
      },
    })
  }, [])

  return (
    <Flex w="100vw" h="100vh" bg="#fffffe">
      <Flex borderRight="1px solid #444444" flex={1} position="relative">
        <CodeEditor ref={editorRef} />
      </Flex>
      <Flex flex={1}>
        <Analytics editorRef={editorRef} />
      </Flex>
    </Flex>
  )
}

export default App
