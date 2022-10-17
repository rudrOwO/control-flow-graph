export class Node {
  label: string = ""
  // code: string
  children: Array<Node> = []

  constructor(label: string) {
    this.label = label
  }

  addChild(child: Node) {
    this.children.push(child)
  }

  renderToMermaid(): string {
    const renderString = `flowchart TD
    `
    // TODO Call BFS / DFS Here
    return renderString
  }
}

// export class IfElseNode extends Node {
// }

// export class EntryLoopNode extends Node {
// }

// export class ExitLoopNode extends Node {
// }
