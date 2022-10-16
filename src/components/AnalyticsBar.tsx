import Bar from "./Bar"
import { Box, Text } from "@chakra-ui/react"
import { IoMdAnalytics } from "react-icons/io"

const AnalyticsBar = () => {
  return (
    <Bar bg="teal.500">
      <Box mx="10px">
        <IoMdAnalytics size="35px" />
      </Box>
      <Text mt="1px">Code Analyzer</Text>
    </Bar>
  )
}

export default AnalyticsBar
