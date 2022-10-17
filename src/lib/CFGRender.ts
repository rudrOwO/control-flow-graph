import Node from "./Node"
import makeGraph from "./graph"

export let lines: Array<string>

export default function getCFGRender(code: string): string {
  const renderString = `flowchart TD
    `
  lines = [""]
  const startNode = new Node("Start")
  const endNode = new Node("End")

  for (const line of code.split("\n")) {
    lines.push(line)
  }

  makeGraph(1, lines.length, startNode, endNode)
  // TODO Call DFS Here

  return renderString
}
