import styles from './App.module.css'
import Header from './components/Header.js'
import Favorites from './components/Favorites.js'

const App = () => {
	return (
		<div className={styles.container}>
			<Header className={styles.header}></Header>
			<Favorites className={styles.fav}></Favorites>
			<div className={styles.recent}>recent</div>
		</div>
	);
}



export default App;