import { Flex, TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import { MutableRefObject } from "react"
import AnalyticsBar from "./AnalyticsBar"
import CFG from "./CFG"

interface AnalyticsProps {
  editorRef: MutableRefObject<any>
}

const Analytics = ({ editorRef }: AnalyticsProps) => {
  return (
    <Flex w="100%" flexDirection="column">
      <AnalyticsBar />
      <Tabs
        isFitted={true}
        variant="soft-rounded"
        colorScheme="teal"
        flexGrow={1}
      >
        <TabList mx="10px">
          <Tab>Control Flow</Tab>
          <Tab>Test Cases</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CFG editorRef={editorRef} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Analytics
