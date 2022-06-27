import { useState, Fragment, memo } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useSelector, useDispatch } from 'react-redux'
import store, { toggle_todo, delete_todo, add_todo, set_visibility } from './store.js'
import styles from './styles/index.module.scss'

const Todo = memo(({text, id, completed}) => {
  const dispatch = useDispatch()
  const handleDeleteTodo = () => {
    dispatch(delete_todo(id))
  }
  const handleToggle = () => {
    dispatch(toggle_todo(id))
  }
  return (
    <div className={styles.todo_item}>
      <div className={[styles.todo_text, completed ? styles.completed : ''].join(' ')} onClick={handleToggle}>{text}</div>
      <span className={styles.delete_icon} onClick={handleDeleteTodo}>X</span>
    </div>
  )
})

const TodoList = memo(() => {
  const todos = useSelector(state => {
    const todos = state.todos;
    const visibility = state.visibility
    if(visibility === 'All') return todos
    const completed = visibility === 'Completed'
    return todos.filter(todo => todo.completed === completed)
  })
  return (
    <div className={styles.todo_list_wrapper}>
      {
        todos.length > 0 && todos.map(todo => (
          <Todo {...todo} key={todo.id}/>
        ))
      }
    </div>
  )
})

const AddTodo = memo(() => {
  const [ todo, setTodo ] = useState('')
  const dispatch = useDispatch()
  const handleTodoChanged = (event) => {
    setTodo(event.target.value)
  }
  const handleConfirm = () => { // 创建一条todo 内容
    if(!todo.trim()) {
      window.$message.warning('todo内容不得为空')
      return
    }
    dispatch(add_todo({
      text: todo.trim(),
      id: Date.now(),
      completed: false
    }))
    setTodo('')
  }
  return (
    <div className={styles.todo_wrapper}>
      <input type="text" placeholder='What next to be done ?' className={styles.todo_input} value={todo} onChange={handleTodoChanged}/>
      <button className='primary-button' onClick={handleConfirm}>确定</button>
    </div>
  )
})


const filter_arrray = ['All', 'Active', 'Completed']
const TodoFilter = memo(() => {
  const dispatch = useDispatch()
  const unfinished_todos_length = useSelector(state => state.todos).filter(todo => !todo.completed).length
  const visibility = useSelector(state => state.visibility)
  const handleToggleVisibility = (filter) => {
    dispatch(set_visibility(filter))
  }
  return (
    <div className={styles.filter_footer}>
      <span className={styles.tip}>{unfinished_todos_length > 0 ? unfinished_todos_length : 'No'} items left</span>
      {
        filter_arrray.length > 0 && filter_arrray.map(filter => (
          <span 
            className={[styles.filter_item, filter === visibility ? styles.active: ''].join(' ')} 
            key={filter}
            onClick={handleToggleVisibility.bind(null, filter)}  
          >{filter}</span>
        ))
      }
    </div>
  )
})


function App() {
  return (
    <Fragment>
      <AddTodo/>
      <TodoList/>
      <TodoFilter/>
    </Fragment>
  )
}


if(!__VUEPRESS_SSR__) {
  const root = createRoot(document.querySelector('._react_todo_list'))
  root.render(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}