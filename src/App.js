import styles from './App.module.css'
import Navegation from './components/Navegation.js'
import Header from './components/Header.js'
import SearchBar from './components/SearchBar.js'
import Footer from './components/Footer.js'

const App = () => {
	return (
		<div className={styles.container}>
			<Header className={styles.head} />
			<section className={styles.body} >
				<SearchBar />
			</section>
			<Footer className={styles.footer} />
		</div>
	);
}



export default App;