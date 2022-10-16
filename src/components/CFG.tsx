import { Box } from "@chakra-ui/react"
import { useEffect } from "react"

interface CFGProps {
  code: string
}

const CFG = ({ code }: CFGProps) => {
  useEffect(() => {
    // TODO call generateCFG script from lib/ here
  })

  return (
    <Box>
      <pre>{code}</pre>
    </Box>
  )
}

export default CFG
