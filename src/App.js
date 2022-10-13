import styles from './css/App.module.css'
import Header from './components/Header'
import AddItems from './components/AddItem'
import Items from './components/Items'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <AddItems />
      <Items />
      <Footer />
    </div>
  );
}

export default App;
