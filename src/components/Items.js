import { useSelector } from 'react-redux'
import styles from '../css/Items.module.css'
import Item from './Item'

const Items = () => {
  const items = useSelector(state => state.todo.items)

  return (
    <div className={styles.items}>
      <ul>
        {items.map(item => <Item key={item.id} item={item} />)}
      </ul>
    </div>
  )
}

export default Items