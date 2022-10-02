import axios from "axios"
import { useEffect, useReducer, useState } from "react"
import { ITodo } from "../types/todo"

enum FetchActionKind {
  FETCHING = 'FETCHING',
  FETCHED = 'FETCHED',
  ERROR = 'ERROR'
}
interface IFetchAction {
  type: FetchActionKind,
  payload?: []
}
interface ITodoReducer {
  data: any,
  loading: boolean,
  error: boolean
}
const FetchReducerInit = {
  data: [],
  loading: false,
  error: false
}

const fetchReducer = (state: ITodoReducer, action: IFetchAction) => {
  switch (action.type) {
    case 'FETCHING':
      return { ...state, loading: true }
    case 'FETCHED':
      return { ...state, loading: false, data: action.payload }
    case 'ERROR':
      return { ...state, error: true }
    default:
      return state
  }
}

export function useFetch(
  url: string
) {
  const [state, dispatch] = useReducer(fetchReducer, FetchReducerInit)
  useEffect(() => {
    let ignore = false
    const fetchApi = async () => {
      dispatch({ type: FetchActionKind.FETCHING })
      try {
        const { data } = await axios.get(url)
        if (!ignore) {
          console.log(data)
          dispatch({ type: FetchActionKind.FETCHED, payload: data })
        }
      }
      catch {
        dispatch({ type: FetchActionKind.ERROR })
      }
    }
    url && fetchApi()

    return () => { ignore = true }
  }, [])

  return state
}