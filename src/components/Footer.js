import { useDispatch, useSelector } from 'react-redux'
import styles from '../css/Footer.module.css'
import { todoActions } from '../store/todo/todoSlice'

const Footer = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.todo.items)
  const pendingTask = items.length || 0

  const clearAllHandler = () => {
    dispatch(todoActions.clearAllItems());
  }

  return (
    <div className={styles.footer}>
      <span>You have {pendingTask} pending tasks</span>
      <button onClick={clearAllHandler}>Clear All</button>
    </div>
  )
}

export default Footer