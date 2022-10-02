import axios from "axios"
import { useEffect, useReducer, useState } from "react"
import { useDispatch } from "react-redux"
import { addActivityList } from "../actions/activityListAction"
import { AppDispatch } from "../store"
import { ITodo } from "../types/todo"

const useAppDispatch: () => AppDispatch = useDispatch
enum TodoActionKind {
  REINITIALIZE = 'REINITIALIZE',
  ADD_ITEM = 'ADD_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  SET_SELECT = 'SET_SELECT',
  GET_ITEM = 'GET_ITEM'
}
interface ITodoAction {
  type: TodoActionKind,
  payload?: any
}
interface ITodoReducer {
  todoList: ITodo[],
  selectingId: number | null
}
const TodoReducerInit = {
  todoList: [],
  selectingId: null
}

const todoReducer = (state: ITodoReducer, action: ITodoAction) => {
  switch (action.type) {
    case 'REINITIALIZE':
      return { ...state, todoList: action.payload }
    case 'ADD_ITEM':
      useAppDispatch()(addActivityList(`Created task '${action.payload}' succesfully`))
      return (
        {
          ...state,
          todoList: [
            ...state.todoList,
            {
              id: state.todoList.length ? state.todoList[state.todoList.length - 1].id + 1 : 0,
              title: action.payload
            }
          ]
        }
      )
    case 'DELETE_ITEM':
      if (action.payload !== null) {
        const deleteTaskName = [...state.todoList].find(todo => todo.id === action.payload)?.title
        useAppDispatch()(addActivityList(`Deleted task '${deleteTaskName}'`))
        return (
          {
            ...state,
            todoList: [...state.todoList].filter(todo => todo.id !== action.payload),
            selectingId: null
          }
        )
      }
      else {
        useAppDispatch()(addActivityList(`Please select task before delete`))
        return { ...state }
      }
    case 'UPDATE_ITEM':
      const prevTaskName = [...state.todoList].find(todo => todo.id === state.selectingId)?.title
      const newTaskName = action.payload
      useAppDispatch()(
        addActivityList(
          `Task '${prevTaskName}' has been updated to '${newTaskName}'`
        )
      )
      return (
        {
          ...state,
          todoList: [...state.todoList].map(todo => (
            todo.id === state.selectingId
              ? { ...todo, title: action.payload }
              : todo
          )),
          selectingId: null
        }
      )
    case 'SET_SELECT':
      return (
        {
          ...state,
          selectingId: action.payload
        }
      )
    case 'GET_ITEM':
      console.log(state)
      return { ...state }
  }
  return state
}

export function useTodoList(
  initTodo: ITodo[]
) {
  const [todoState, dispatch] = useReducer(todoReducer, { ...TodoReducerInit, todoList: initTodo })

  const addTodo = (taskName: string) => {
    dispatch({ type: TodoActionKind.ADD_ITEM, payload: taskName })
  }
  const deleteSelectedTodo = () => {
    dispatch({ type: TodoActionKind.DELETE_ITEM, payload: todoState.selectingId })
  }
  const updateTodo = (newTaskName: string) => {
    dispatch({ type: TodoActionKind.UPDATE_ITEM, payload: newTaskName })
  }
  const getData = () => {
    dispatch({ type: TodoActionKind.GET_ITEM })
  }
  const selectTodo = (todoId: number) => {
    dispatch({ type: TodoActionKind.SET_SELECT, payload: todoId })
  }
  useEffect(() => {
    dispatch({ type: TodoActionKind.REINITIALIZE, payload: initTodo })
  }, [initTodo])

  return (
    {
      todoState,
      todoAction:
      {
        addTodo,
        getData,
        deleteSelectedTodo,
        updateTodo,
        selectTodo
      }
    }
  )
}