export default class Node {
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

// export class IfElseNode extends Node {
// }

// export class EntryLoopNode extends Node {
// }

// export class ExitLoopNode extends Node {
// }
