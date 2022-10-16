import ReloadButton from "./ReloadButton"
import { Flex, TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import { useState, MutableRefObject, useCallback } from "react"
import AnalyticsBar from "./AnalyticsBar"
import CFG from "./CFG"
import { defaultCode } from "./CodeEditor"

interface AnalyticsProps {
  editorRef: MutableRefObject<any>
}

const Analytics = ({ editorRef }: AnalyticsProps) => {
  const [code, setCode] = useState(defaultCode)

  const fetchCode = useCallback(() => {
    setCode(editorRef.current.getValue())
  }, [])

  return (
    <>
      <Flex w="100%" flexDirection="column">
        <AnalyticsBar />
        <Tabs isFitted={true} variant="soft-rounded" colorScheme="teal" flexGrow={1}>
          <TabList mx="10px">
            <Tab>Control Flow</Tab>
            <Tab>Test Cases</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CFG code={code} />
              {/* TODO put Testing Component here  */}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <ReloadButton onClick={fetchCode} />
    </>
  )
}

export default Analytics
