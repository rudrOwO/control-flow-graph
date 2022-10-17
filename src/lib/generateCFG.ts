import { Node } from "./Node"

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

  makeGraph(1, lines.length, startNode, endNode)

  return startNode.renderToMermaid()
}

function makeGraph(firstLine: number, lastLine: number, entryNode: Node, exitNode: Node) {
  let currentNode = new Node("")
  entryNode.addChild(currentNode)

  for (let i = firstLine; i < lastLine; i++) {
    if (
      lines[i].includes("if") ||
      lines[i].includes("while") ||
      lines[i].includes("for") ||
      lines[i].includes("do")
    ) {
      const startNode = new Node(i.toString() + ", ")
      currentNode.addChild(startNode)
      let endLine = findClosingBrace(i) // where the conditional block ends
      const endNode = new Node(endLine.toString() + ", ")
      makeGraph(i + 1, endLine, startNode, endNode)

      if (lines[endLine].includes("else")) {
        const newFiLine = findClosingBrace(endLine) // Extended where the conditional block ends
        endNode.label = newFiLine.toString() + ", "
        makeGraph(endLine + 1, newFiLine, startNode, endNode)
      }

      currentNode = endNode
      i = endLine

      // TODO program connections between entry and exit for loops
    } else {
      currentNode.label += i.toString() + ", "
    }
  }

  currentNode.addChild(exitNode)
}

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
