import { Center } from "@chakra-ui/react"
import { useEffect } from "react"
import generateCFG from "../lib/generateCFG"
import mermaid from "mermaid"

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
    <Center key={code} className="mermaid" mt="10px">
      {generateCFG(code)}
    </Center>
  )
}

export default CFG
