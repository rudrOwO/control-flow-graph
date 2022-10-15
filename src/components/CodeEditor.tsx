import Editor, { EditorProps, OnMount, Monaco } from "@monaco-editor/react"
import { useCallback, useRef, useState } from "react"

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

    for (let c of val) {
      console.log(c)
    }
  }

  return (
    <>
      <Editor height="100%" language="c" onMount={editorDidMount} />
    </>
  )
}

export default CodeEditor
