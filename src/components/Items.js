import { useSelector } from 'react-redux'
import Item from './Item'

const Items = () => {
  const items = useSelector(state => state.todo.items)

  return (
    <div>
      <ul>
        {items.map(item => <Item key={item.id} item={item} />)}
      </ul>
    </div>
  )
}

export default Items