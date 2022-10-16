import Editor, { OnMount, Monaco } from "@monaco-editor/react"
import { useCallback, forwardRef } from "react"
import { Flex, Box } from "@chakra-ui/react"
import EditorBar from "./EditorBar"

interface CodeEditorProps {}

const CodeEditor = forwardRef<CodeEditorProps, Monaco>(
  (props: CodeEditorProps, editorRef: Monaco) => {
    const editorDidMount: OnMount = useCallback(editor => {
      editorRef.current = editor
    }, [])

    return (
      <Flex w="100%" flexDirection="column">
        <EditorBar />
        <Box flexGrow={1}>
          <Editor
            height="100%"
            language="c"
            onMount={editorDidMount}
            defaultValue={`#include <stdio.h>

int main(void) {
  return 0;
}`}
          />
        </Box>
      </Flex>
    )
  }
)

export default CodeEditor
