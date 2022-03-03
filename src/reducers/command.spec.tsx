import reducer from './command'
import { CommandReducerState } from '../interfaces';

describe('Command Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, { type: 'ANYTHING', payload: 'help' })
    expect(result).toBeDefined()
  })

  test('Load board action', () => {
    const startState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 1,
      X: '',
      Y: ''
    }
    const expectedState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: 'new: OK',
      level: 1,
      X: '',
      Y: ''
    }
    const action = { type: 'BOARD/LOAD', payload: "new: OK" }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

  test('Help action', () => {
    const startState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 1,
      X: '',
      Y: ''
    }
    const expectedState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      command: 'help',
      board: '',
      level: 1,
      X: '',
      Y: ''
    }
    const action = { type: 'COMMAND/HELP', payload: "help" }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

  test('New level action', () => {
    const startState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 1,
      X: '',
      Y: ''
    }
    const expectedState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      command: 'new 1',
      board: '',
      level: 1,
      X: '',
      Y: ''
    }
    const action = { type: 'COMMAND/NEW', payload: "new 1" }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

  test('Get map action', () => {
    const startState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 1,
      X: '',
      Y: ''
    }
    const expectedState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      command: 'map',
      board: '',
      level: 1,
      X: '',
      Y: ''
    }
    const action = { type: 'COMMAND/MAP', payload: "map" }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

  test('Rotate tile action', () => {
    const startState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 1,
      X: '',
      Y: ''
    }
    const expectedState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      command: 'rotate 0 0',
      board: '',
      level: 1,
      X: '',
      Y: ''
    }
    const action = { type: 'COMMAND/MAP', payload: "rotate 0 0" }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

  test('Verify action', () => {
    const startState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 1,
      X: '',
      Y: ''
    }
    const expectedState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      command: 'verify',
      board: '',
      level: 1,
      X: '',
      Y: ''
    }
    const action = { type: 'COMMAND/VERIFY', payload: "verify" }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

  test('Load board action', () => {
    const startState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 1,
      X: '',
      Y: ''
    }
    const expectedState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: 'new: OK',
      level: 1,
      X: '',
      Y: ''
    }
    const action = { type: 'BOARD/LOAD', payload: 'new: OK' }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

  test('Save level action', () => {
    const startState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 1,
      X: '',
      Y: ''
    }
    const expectedState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 2,
      X: '',
      Y: ''
    }
    const action = { type: 'BOARD/SAVE_LEVEL', payload: 2 }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

  test('Set level action', () => {
    const startState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 2,
      X: '',
      Y: ''
    }
    const expectedState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 2,
      X: '',
      Y: ''
    }
    const action = { type: 'BOARD/SET_LEVEL', payload: 2 }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

  test('Set X axi action', () => {
    const startState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 2,
      X: '0',
      Y: '0'
    }
    const expectedState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 2,
      X: '0',
      Y: '0'
    }
    const action = { type: 'BOARD/SET_X', payload: "0" }
    const result = reducer(startState, action)

    expect(result).toEqual(expectedState)
  })

  test('Set Y axi action', () => {
    const startState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 2,
      X: '0',
      Y: '0'
    }
    const expectedState: CommandReducerState = {
      commands: [
        {
          id: 2,
          command: 'new',
          description: 'Set new level'
        }
      ],
      board: '',
      level: 2,
      X: '0',
      Y: '1'
    }
    const action = { type: 'BOARD/SET_Y', payload: "1" }
    const result = reducer(startState, action)

    expect(result).toEqual(expectedState)
  })
})