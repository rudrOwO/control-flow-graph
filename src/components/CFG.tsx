import { Text, Flex } from "@chakra-ui/react"
import { useEffect } from "react"
import getCFGRender from "../lib/CFGRender"
import mermaid from "mermaid"
import { complexity } from "../lib/CFGRender"

interface CFGProps {
  code: string
}

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
})

const CFG = ({ code }: CFGProps) => {
  useEffect(() => {
    mermaid.contentLoaded()
  }, [code])

  return (
    <Flex flexDirection="column" alignItems="center" mt="15px">
      <div key={code} className="mermaid">
        {getCFGRender(code)}
      </div>
      <Text mt="50px" fontSize="lg" color="black">
        Cyclomatic Complexity: {complexity.regions}
      </Text>
    </Flex>
  )
}

export default CFG
