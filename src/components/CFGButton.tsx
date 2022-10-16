import { Button } from "@chakra-ui/react"

export interface CFGButtonProps {
  onClick: () => void
}

const CFGButton = (props: CFGButtonProps) => {
  const { onClick: handleClick } = props

  return (
    <Button
      mx="20px"
      p="10px"
      colorScheme="teal"
      fontSize="md"
      onClick={handleClick}
    >
      Create CFG
    </Button>
  )
}

export default CFGButton
