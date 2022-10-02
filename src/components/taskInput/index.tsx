import { useReducer, useState } from "react"
import { ITodo } from "../../types/todo"
import { CancelButton, SubmitButton, TaskInputContainer, Typing } from "../style"

enum TaskInputAction {
  IDLE = 'IDLE',
  SETTASKNAME = 'SETTASKNAME',
  FINISH_TYPE = 'FINISH_TYPE',
  CLEAR_INPUT = 'CLEAR_INPUT'
}
interface ITaskInputState {
  taskName: string,
  isTyping: boolean
}
interface ITaskInputAction {
  type: TaskInputAction,
  payload?: any,
}
interface ITaskInput {
  onSubmit: (todo: string) => void,
  onDelete: () => void
}
const initialState: ITaskInputState = {
  taskName: '',
  isTyping: false
}
const reducer = (state: ITaskInputState, action: ITaskInputAction) => {
  switch (action.type) {
    case TaskInputAction.SETTASKNAME:
      return { ...state, taskName: action.payload, isTyping: action.payload !== '' ? true : false }
    case TaskInputAction.FINISH_TYPE:
      return { ...state, isTyping: false }
    case TaskInputAction.CLEAR_INPUT:
      return { ...state, taskName: '' }
  }
  return state
}
export const TaskInput = (
  { onSubmit, onDelete }: ITaskInput
) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const onSubmitHandle = (taskName: string) => {
    onSubmit(taskName)
    dispatch({ type: TaskInputAction.CLEAR_INPUT })
  }
  return (
    <TaskInputContainer>
      <h2>Task Name</h2>
      <input type='text'
        value={state.taskName}
        onChange={e => dispatch({ type: TaskInputAction.SETTASKNAME, payload: e.target.value })}
        onBlur={() => dispatch({ type: TaskInputAction.FINISH_TYPE })}
        // onFocus={() => dispatch({ type: TaskInputAction.START_TYPE })}
      />
      <Typing>{state.isTyping && 'Typing......'}</Typing>
      <SubmitButton
        className={`${!state.taskName && 'disabled'}`}
        onClick={()=>onSubmitHandle(state.taskName)}
        disabled={state.taskName ? false : true}>
          BUTTON
      </SubmitButton>
      <CancelButton onClick={onDelete}>DELETE</CancelButton>
    </TaskInputContainer>
  )
}