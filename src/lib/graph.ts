import Node from "./Node"
import { lines } from "./CFGRender"
import { complexity } from "./CFGRender"

export default function makeGraph(
  firstLine: number,
  lastLine: number,
  entryNode: Node,
  exitNode: Node
) {
  complexity.regions++

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

      let IFExists = lines[i].includes("if")
      let FORExists = lines[i].includes("for")
      let WHILEExists = lines[i].includes("while")
      let DOExists = lines[i].includes("do")
      let ELSEExists = false

      const startNode = new Node(i.toString() + ", ")
      currentNode.addChild(startNode)
      let endLine = findClosingBrace(i) // where the conditional block ends
      const endNode = new Node(endLine.toString() + ", ")
      makeGraph(i + 1, endLine, startNode, endNode)

      currentNode = endNode
      i = endLine

      if (lines[endLine].includes("else")) {
        ELSEExists = true
        const newEndLine = findClosingBrace(endLine) // Extended where the conditional block ends
        endNode.label = newEndLine.toString() + ", "
        makeGraph(endLine + 1, newEndLine, startNode, endNode)
        i = newEndLine
      }

      // BUG: Remove one extra arrow for Entry-controlled loops
      if (IFExists || FORExists || WHILEExists) {
        if (!ELSEExists) {
          startNode.addChild(endNode)
        }
      }
      if (FORExists || WHILEExists || DOExists) {
        endNode.addChild(startNode)
      }
    } else {
      currentNode.label += i.toString() + ", "
    }
  }

  currentNode.addChild(exitNode)
}

// TODO: Make a better parser not dependent on Braces
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
