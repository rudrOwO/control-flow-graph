import { Center } from "@chakra-ui/react"
import { useEffect } from "react"
import getCFGRender from "../lib/CFGRender"
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
      {getCFGRender(code)}
    </Center>
  )
}

export default CFG
