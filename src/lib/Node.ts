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

export class IfNode extends Node {
  // TODO Add method for rendering to Mermaid
}

export class WhileNode extends Node {
  // TODO Add method for rendering to Mermaid
}

export class ForNode extends Node {
  // TODO Add method for rendering to Mermaid
}
