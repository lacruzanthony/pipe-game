import { HELP, NEW, MAP, ROTATE, VERIFY, BORD_LOAD } from './command'

const MESSAGE_SHOW = 'MESSAGE/SHOW'

const initialState = {
  message: ''
}

export const showMessage = (msg: string) => ({ type: MESSAGE_SHOW, payload: msg })

export default function (state = initialState, action: any) {
  switch (action.type) {
    case MESSAGE_SHOW:
      return ({ ...state, message: action.payload })

    case HELP:
    case NEW:
    case MAP:
    case ROTATE:
    case VERIFY:
    case BORD_LOAD:
      return ''

    default:
      return state
  }
}