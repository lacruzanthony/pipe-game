import { getTextNodes, wrapEachCharacter } from '../utils/characterWrapper';

/**
 * Wrap each tile in a HTML element
 * which allow us to add interaction.
 */
export const wrapTiles = (data: string) => {
  const map = data.trim().replace('map:', '');
  const container = document.createElement('div');
  container.innerHTML = map;

  const allTextNodes = getTextNodes(container);
  allTextNodes.forEach((textNode) => {
    wrapEachCharacter(textNode, 'button');
  });
  return { map, container };
}

/**
 * Add the board as a HTML element.
 */
export const appendBoard = (child: HTMLDivElement) => {
  child.id = 'tiles'
  const board = document.getElementById("board") as HTMLDivElement;
  if (board.childNodes.length) {
    const tiles = document.getElementById("tiles") as Node;
    board.removeChild(tiles)
  }
  document.getElementById("board")?.appendChild(child);
}