import Node from "./Node"
import makeGraph from "./graph"

export let lines: Array<string>
let renderString = `flowchart TD
    `

export default function getCFGRender(code: string): string {
  lines = [""]
  const startNode = new Node("Start")
  const endNode = new Node("End")

  for (const line of code.split("\n")) {
    lines.push(line)
  }

  makeGraph(1, lines.length, startNode, endNode)
  renderString = `flowchart TD
    `
  DFS(startNode)

  console.log(renderString)

  return renderString
}

function DFS(node: Node) {
  for (const neighbor of node.children) {
    // append string
    renderString += `${getNodeID(node.label)}(${node.label})-->${getNodeID(neighbor.label)}(${
      neighbor.label
    })
    `
    DFS(neighbor)
  }
}

function getNodeID(label: string) {
  if (label === "Start" || label === "End") {
    return label[0]
  }
  return label.substring(0, label.indexOf(","))
}
