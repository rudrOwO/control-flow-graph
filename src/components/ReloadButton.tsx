import { IconButton } from "@chakra-ui/react"
import { IoReload } from "react-icons/io5"

export interface CFGButtonProps {
  onClick: () => void
}

const ReloadButton = (props: CFGButtonProps) => {
  const { onClick: handleClick } = props

  return (
    <IconButton
      aria-label="Reload"
      size="lg"
      position="absolute"
      top="85%"
      left="90%"
      mx="20px"
      p="10px"
      colorScheme="teal"
      fontSize="md"
      onClick={handleClick}
    >
      <IoReload size="35px" />
    </IconButton>
  )
}

export default ReloadButton
