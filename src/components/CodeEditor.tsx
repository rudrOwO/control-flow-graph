import Editor, { EditorProps, OnMount, Monaco } from "@monaco-editor/react"
import { useCallback, useRef, useState } from "react"
import { Flex, Box } from "@chakra-ui/react"
import EditorBar from "./EditorBar"

interface CodeEditorProps extends EditorProps {}

// editor.getAction('editor.action.formatDocument').run()

const CodeEditor = (props: CodeEditorProps) => {
  const editorRef = useRef<Monaco | null>(null)

  const editorDidMount: OnMount = useCallback(editor => {
    editorRef.current = editor
  }, [])

  const test = () => {
    // alert(editorRef.current?.getValue())
    const editor = editorRef.current!
    const val = editor.getValue()

    console.log(val)
  }

  return (
    <Flex w="100%" flexDirection="column">
      <EditorBar onClick={() => {}} />
      <Box flexGrow={1}>
        <Editor height="100%" language="c" onMount={editorDidMount} />
      </Box>
    </Flex>
  )
}

export default CodeEditor
