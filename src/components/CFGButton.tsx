import { Button } from "@chakra-ui/react"

export interface CFGButtonProps {
  onClick: () => void
}

const CFGButton = (props: CFGButtonProps) => {
  const { onClick: handleClick } = props

  return (
    <Button
      mx="20px"
      p="8px"
      variant="unstyled"
      bg="red.500"
      fontSize="md"
      _hover={{
        background: "red.600",
      }}
      onClick={handleClick}
    >
      Create CFG
    </Button>
  )
}

export default CFGButton
