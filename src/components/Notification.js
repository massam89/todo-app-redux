import { useSelector } from 'react-redux'
import styles from '../css/Notification.module.css'

const Notification = () => {
  const notification = useSelector(state => state.ui.notification)
  return (
    <div className={styles.notification}>
      {notification}
    </div>
  )
}

export default Notification