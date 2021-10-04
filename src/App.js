import styles from './App.module.css'
import Home from './Home'
import Navegation from './components/Navegation.js'

const App = () => {
	return (
		<div className={styles.container}>
			<Navegation  />
			<Home />
			{/* 
			<Header className={styles.header}></Header>
			<Navegation  />
			<Favorites className={styles.fav}></Favorites>
			<div className={styles.recent}>recent</div>
			 */}
		</div>
	);
}



export default App;