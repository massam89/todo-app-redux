import { useDispatch } from 'react-redux';
import styles from '../css/Item.module.css'
import { todoActions } from '../store/todo/todoSlice';

const Item = (props) => {
  const dispatch = useDispatch()


  const deleteHandler = () => {
    dispatch(todoActions.removeItem(props.item))
  }
  
  return (
    <li className={styles.item}>
      <span>{props.item.title}</span>
      <button onClick={deleteHandler}>delete</button>
    </li>
  )
}

export default Item