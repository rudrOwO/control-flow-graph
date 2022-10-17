import { Node, IfNode } from "./Node"

let lines: Array<string>
let startNode: Node
let endNode: Node

function generateCFG(code: string): string {
  // Initialize
  lines = [""]
  for (const line of code.split("\n")) {
    lines.push(line)
  }
  startNode = new Node("Start")
  endNode = new Node("End")

  return ""
}

function makeGraph(firstLine: number, lastLine: number, entryNode: Node, exitNode: Node) {}

function findClosingBrace(firstLine: number): number {
  try {
    if (!lines[firstLine].includes("{")) {
      throw "Line does not have an opening brace"
    }
  } catch (e) {
    console.error(e)
  }

  for (let i = firstLine + 1, ignoreCount = 0; ; i++) {
    if (lines[i].includes("}") && ignoreCount == 0) {
      return i
    }
    if (lines[i].includes("{")) {
      ignoreCount++
    }
    if (lines[i].includes("}")) {
      ignoreCount--
    }
  }
}

export default generateCFG
