import { Node, IfElseNode } from "./Node"

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

  return ""
}

function makeGraph(firstLine: number, lastLine: number, entryNode: Node, exitNode: Node) {
  let currentNode = new Node("")
  entryNode.addChild(currentNode)

  for (let i = firstLine; i < lastLine; i++) {
    if (lines[i].includes("if")) {
      // NOTE handles both if and if-else

      const ifNode = new IfElseNode(i.toString() + ", ")
      currentNode.addChild(ifNode)
      let fiLine = findClosingBrace(i) // where the conditional block ends
      const fiNode = new IfElseNode(fiLine.toString() + ", ")
      makeGraph(i + 1, fiLine, ifNode, fiNode)

      if (lines[fiLine].includes("else")) {
        const newFiLine = findClosingBrace(fiLine) // Extended where the conditional block ends
        fiNode.label = newFiLine.toString() + ", "
        makeGraph(fiLine + 1, newFiLine, ifNode, fiNode)
      }

      currentNode = fiNode
    } else if (lines[i].includes("while") || lines[i].includes("for")) {
    } else if (lines[i].includes("do")) {
      // TODO Handle Do while later
    } else {
      currentNode.label += i.toString() + ", "
    }
  }
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
