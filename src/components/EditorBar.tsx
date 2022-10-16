import Bar from "./Bar"
import { Image, Text } from "@chakra-ui/react"

const EditorBar = () => {
  return (
    <Bar bg="blue.500">
      <Image src="/c-logo.png" h="35px" mx="10px" />
      <Text mt="1px">Code Editor</Text>
    </Bar>
  )
}

export default EditorBar
