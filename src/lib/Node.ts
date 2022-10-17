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
}

export class IfElseNode extends Node {
  // TODO Add method for rendering to Mermaid
}

export class EntryLoopNode extends Node {
  // TODO Add method for rendering to Mermaid
}

export class ExitLoopNode extends Node {
  // TODO Add method for rendering to Mermaid
}
