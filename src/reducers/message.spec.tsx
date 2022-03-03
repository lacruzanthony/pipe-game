import reducer from './message'
import { MessageReducerState } from '../interfaces';

describe('Command Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, { type: 'ANYTHING', payload: 'help' })
    expect(result).toBeDefined()
  })

  test('Show Message Action', () => {
    const startState: MessageReducerState = {
      message: ""
    }
    const expectedState: MessageReducerState = {
      message: "Loading board",
    }
    const action = { type: 'MESSAGE/SHOW', payload: "Loading board" }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })

  test('Remove Message', () => {
    const startState: MessageReducerState = {
      message: "Loading board"
    }
    const expectedState: string = ""

    const action = { type: 'BOARD/LOAD', payload: null }
    const result = reducer(startState, action)
    expect(result).toEqual(expectedState)
  })
})