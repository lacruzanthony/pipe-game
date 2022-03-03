/**
 * recursively get all text nodes as an array for a given element
 */
export const getTextNodes = (node: ChildNode): ChildNode[] => {
  var childTextNodes = [] as ChildNode[];

  if (!node.hasChildNodes()) {
    return [];
  }

  var childNodes: NodeListOf<ChildNode> = node.childNodes;
  childNodes.forEach((childNode: ChildNode) => {
    if (childNode.nodeType === Node.TEXT_NODE) {
      childTextNodes.push(childNode);
    } else if (childNode.nodeType === Node.ELEMENT_NODE) {
      Array.prototype.push.apply(childTextNodes, getTextNodes(childNode));
    }
  })

  return childTextNodes;
}

/**
 * given a text node, wrap each character in the
 * given tag.
 */
export const wrapEachCharacter = (textNode: Node, tag: string) => {
  const text = textNode.nodeValue as string;
  const parent = textNode.parentNode as ParentNode;

  const characters = text.split('');
  characters.forEach((character) => {
    let element = document.createElement(character === '\n' ? "br" : tag);
    const characterNode = document.createTextNode(character);
    element.appendChild(characterNode)

    parent.insertBefore(element, textNode);
  });

  parent.removeChild(textNode);
}