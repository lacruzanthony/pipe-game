import React from 'react';
import UseWebsocket from '../../hooks/useWebsocket';
import { showMessage } from '../../reducers/message';
import { connect, useDispatch } from 'react-redux';
import { mapCommand, newCommand, rotateCommand, saveNewLevel, verifyCommand } from '../../reducers/command';

const Board = ({ board, level }: any) => {
  const { ws, message } = UseWebsocket();
  const dispatch = useDispatch();

  const rotateTile = (event: MouseEvent) => {
    const tileButton = event.currentTarget as HTMLButtonElement
    const X = tileButton.dataset.X;
    const Y = tileButton.dataset.Y;
    dispatch(showMessage('Rotating tile'));
    ws.send(`rotate ${X} ${Y}`)
    ws.send('map')
  }

  const hidrateBoard = () => {
    const noInteractiveBoard = document.getElementById("tiles") as HTMLElement;
    const tiles = noInteractiveBoard.children as HTMLCollection
    let X = 0;
    let Y = -1;
    for (let i = 0; i <= tiles.length - 1; i++) {
      const htmlTile = tiles[i] as HTMLElement
      if (htmlTile.tagName !== 'BR') {
        htmlTile.dataset.X = `${X}`;
        htmlTile.dataset.Y = `${Y}`;
        X++;
        htmlTile.addEventListener('click', rotateTile)
        htmlTile.className = parseInt(level, 10) > 1 ? 'btn-tile-higher-levels' : 'btn-tile';
        htmlTile.dataset.testid = `tile-${i}`
      } else {
        Y++; X = 0;
      }
    }
  }

  const verifyBoard = () => {
    dispatch(showMessage('Verifying board'));
    dispatch(verifyCommand('verify'));
    ws.send('verify')
  }

  const selectLevel = (event: any) => {
    const level = event.target.value as string;
    dispatch(showMessage('Setting new map'));
    ws.send(`new ${level}`)
    ws.send('map')
    dispatch(saveNewLevel(level));
  }

  React.useEffect(() => {
    if (message?.toLowerCase().includes('verify')) {
      dispatch(showMessage(message))
    }
  }, [message])

  React.useEffect(() => {
    if (ws) {
      ws.send(`new ${level}`)
      ws.send('map')
    }
  }, [ws]);

  React.useEffect(() => {
    if (board && !board.includes('OK')) {
      hidrateBoard()
      console.log('here board')
    }
  }, [board])

  React.useEffect(() => {
    dispatch(showMessage('Loading board'))
  }, []);

  return (
    <>
      <div style={{ display: 'flex', }}>
        <button className='btn-verify' onClick={verifyBoard}>VERIFY BOARD 🥇</button>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
          <label>Select a new level (default: 1)</label>
          <select value={level} onChange={selectLevel}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
      </div>
      <div id="board" data-testid='board'></div>
    </>
  )
}

export default connect(
  (state: any) => ({
    board: state.command.board,
    level: state.command.level
  })
)(Board);