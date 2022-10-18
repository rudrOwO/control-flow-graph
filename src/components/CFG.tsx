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

// TODO: Add dynamic import for mermaid
const CFG = ({ code }: CFGProps) => {
  useEffect(() => {
    mermaid.contentLoaded()
  }, [code])

  return (
    <Flex flexDirection="column" alignItems="center" mt="15px">
      <div key={code} className="mermaid">
        {getCFGRender(code)}
      </div>
      <Text
        mt="50px"
        fontSize="xl"
        color="black"
        bg="teal.200"
        p="15px"
        borderRadius="lg"
        mb="10px"
      >
        Cyclomatic Complexity: {complexity.regions}
      </Text>
    </Flex>
  )
}

export default CFG
