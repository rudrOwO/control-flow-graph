import Node from "./Node"
import { lines } from "./CFGRender"

export default function makeGraph(
  firstLine: number,
  lastLine: number,
  entryNode: Node,
  exitNode: Node
) {
  let currentNode = new Node("")
  entryNode.addChild(currentNode)

  for (let i = firstLine; i < lastLine; i++) {
    if (
      lines[i].includes("if") ||
      lines[i].includes("while") ||
      lines[i].includes("for") ||
      lines[i].includes("do")
    ) {
      if (currentNode.label === "") {
        currentNode.label = i.toString() + ", "
      }

      const startNode = new Node(i.toString() + ", ")
      currentNode.addChild(startNode)
      let endLine = findClosingBrace(i) // where the conditional block ends
      const endNode = new Node(endLine.toString() + ", ")
      makeGraph(i + 1, endLine, startNode, endNode)

      // if (lines[endLine].includes("else")) {
      //   const newFiLine = findClosingBrace(endLine) // Extended where the conditional block ends
      //   endNode.label = newFiLine.toString() + ", "
      //   makeGraph(endLine + 1, newFiLine, startNode, endNode)
      // }

      // TODO program connections between entry and exit
      if (lines[i].includes("if")) {
        if (!lines[endLine].includes("else")) {
          startNode.addChild(endNode)
        }
      } else {
        endNode.addChild(startNode)
      }

      currentNode = endNode
      i = endLine
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
