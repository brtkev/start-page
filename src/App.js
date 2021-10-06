import styles from './App.module.css'
import Home from './Home'
import Navegation from './components/Navegation.js'

const App = () => {
	return (
		<div className={styles.container}>
			<Home />
		</div>
	);
}



export default App;