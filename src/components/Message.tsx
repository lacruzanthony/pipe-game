import { connect } from 'react-redux'

interface Message {
  message: string
}

const Message = ({ message }: Message) =>
(
  message ? <><span className="message">{message}</span></> : null
)


export default connect(
  (state: any) => ({ message: state.message.message })
)(Message)

