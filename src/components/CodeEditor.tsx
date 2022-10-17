import Editor, { OnMount, Monaco } from "@monaco-editor/react"
import { useCallback, forwardRef } from "react"
import { Flex, Box } from "@chakra-ui/react"
import EditorBar from "./EditorBar"

export const defaultCode = `#include <stdio.h>

int main(void) {
  int i = 0;

  if (i > 5) {
    printf("Greater than 5");
  } else {
      printf("Not greater than 5");
    }
  }

  return 0;
}`

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
          <Editor height="100%" language="c" onMount={editorDidMount} defaultValue={defaultCode} />
        </Box>
      </Flex>
    )
  }
)

export default CodeEditor
