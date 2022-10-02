import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TaskInput } from './components/taskInput'
import { TodoList } from './components/todoList'
import axios from 'axios'
import { useTodoList } from './customhooks/useTodoList'
import { useFetch } from './customhooks/useFetch'
import { useSelector } from 'react-redux'
import { IActivityList } from './types/activityList'
import { ActivityList } from './components/activityList'
import { Container } from './components/style'
import { Header } from './components/header'

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
  const { todoState, todoAction } = useTodoList(data)
  const { todoList, selectingId } = todoState
  const activityList = useSelector((state: IActivityList) => state.activityList)

  const onSubmit = todoState.selectingId 
    ? todoAction.updateTodo
    : todoAction.addTodo
  
  if (loading) return <div>...loading</div>
  if (error) return <div>Error: something went wrong</div>

  return (
    <div className="App">
      <Header />
      <Container>
        <TodoList todoList={todoList} onSelect={todoAction.selectTodo} selectingId={selectingId} />
        <TaskInput onSubmit={onSubmit} isUpdating={todoState.selectingId ? true : false} onDelete={todoAction.deleteSelectedTodo} />
        <ActivityList activityList={activityList} />
      </Container>
    </div>
  )
}

export default App
