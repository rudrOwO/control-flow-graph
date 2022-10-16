import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"

interface BarProps {
  bg: "blue.500" | "teal.500"
  children?: ReactNode
}

const Bar = ({ children, bg }: BarProps) => {
  return (
    <Flex
      shadow="md"
      p="5px"
      mb="15px"
      fontSize="lg"
      fontWeight="bold"
      color="white"
      width="100%"
      bg={bg}
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Flex>
  )
}

export default Bar
