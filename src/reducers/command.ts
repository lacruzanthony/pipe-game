const initState = {
  commands: [
    {
      id: 2,
      command: 'new',
      description: 'Set new level'
    },
    {
      id: 4,
      command: 'rotate',
      description: 'rotate'
    },
    {
      id: 5,
      command: 'verify',
      description: 'verify'
    },
  ],
  board: '',
  level: 1,
  X: '',
  Y: ''
}

export const HELP = 'COMMAND/HELP';
export const NEW = 'COMMAND/NEW';
export const MAP = 'COMMAND/MAP';
export const ROTATE = 'COMMAND/ROTATE';
export const VERIFY = 'COMMAND/VERIFY';
export const BORD_LOAD = 'BOARD/LOAD';
const SAVE_LEVEL = 'BOARD/SAVE_LEVEL';
const SET_LEVEL = 'BOARD/SET_LEVEL';
const SET_X = 'BOARD/SET_X';
const SET_Y = 'BOARD/SET_Y';


export const helpCommand = (command: string) => ({ type: HELP, payload: command })
export const newCommand = (command: string) => ({ type: NEW, payload: command })
export const mapCommand = (command: string) => ({ type: MAP, payload: command })
export const rotateCommand = (command: string) => ({ type: ROTATE, payload: command })
export const verifyCommand = (command: string) => ({ type: VERIFY, payload: command })
export const loadBoard = (board: string) => ({ type: BORD_LOAD, payload: board })
export const saveNewLevel = (level: string) => ({ type: SAVE_LEVEL, payload: level })
export const setNewLevel = (level: string) => ({ type: SET_LEVEL, payload: level })
export const setX = (X: string) => ({ type: SET_X, payload: X })
export const setY = (Y: string) => ({ type: SET_Y, payload: Y })

export default (state = initState, action: any) => {
  switch (action.type) {
    case HELP:
      return { ...state, command: action.payload }
    case NEW:
      return { ...state, command: action.payload }
    case MAP:
      return { ...state, command: action.payload }
    case ROTATE:
      return { ...state, command: action.payload }
    case VERIFY:
      return { ...state, command: action.payload }
    case BORD_LOAD:
      return { ...state, board: action.payload }
    case SAVE_LEVEL:
      return { ...state, level: action.payload }
    case SET_LEVEL:
      return { ...state, level: action.payload }
    case SET_X:
      return { ...state, X: action.payload }
    case SET_Y:
      return { ...state, Y: action.payload }
    default:
      return state
  }
}