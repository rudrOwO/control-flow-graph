import CFGButton from "./CFGButton"
import { Center } from "@chakra-ui/react"
import { MutableRefObject, useEffect } from "react"

interface CFGProps {
  editorRef: MutableRefObject<any>
}

const CFG = ({ editorRef }: CFGProps) => {
  useEffect(() => {
    setTimeout(() => console.log(editorRef.current.getValue()), 200)
  }, [])

  return (
    <Center>
      <CFGButton />
    </Center>
  )
}

export default CFG
