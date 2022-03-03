import React from 'react';
import { useDispatch } from 'react-redux';
import { loadBoard } from '../reducers/command';
import { appendBoard, wrapTiles } from '../helpers/mapWebSocketMessage';
import { showMessage } from '../reducers/message';

export default function useWebSocket() {
  const WEB_SOCKET_URL = 'wss://hometask.eg1236.com/game-pipes/'
  const [ws, setWs] = React.useState<any>();
  const [message, setMessage] = React.useState<any>();
  const dispatch = useDispatch()
  React.useEffect(() => {
    const ws = new WebSocket(WEB_SOCKET_URL);

    ws.onopen = () => {
      console.log('socket open :)');

      setWs(ws);

      ws.onmessage = (event: MessageEvent<any>) => {
        const message = mapMessage(event.data);
        setMessage(message);
      }

      ws.onclose = () => {
        console.log('closing socket');
      }
    }
    return () => {
      ws.close();
    }
  }, [])

  React.useEffect(() => {
    dispatch(loadBoard(message))
  }, [message])

  return { message, ws };
}

const mapMessage = (data: string) => {
  try {
    if (data.includes('map')) {
      const wrapperObj = wrapTiles(data);

      appendBoard(wrapperObj.container);

      return wrapperObj.map;
    }
    return data;
  } catch (err) {
    return data;
  }
}