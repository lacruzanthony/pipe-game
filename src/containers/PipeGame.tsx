import Board from '../components/Board/Board'
import Message from '../components/Message'

const PipeGame = () => {
  return (
    <>
      <Message />
      <div className='pipegame-container'>
        <Board />
      </div>
    </>
  )
}

export default PipeGame;