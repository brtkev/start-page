import { useEffect } from 'react';
import styles from './App.module.css'
import Navegation from './components/Navegation.js'
import Header from './components/Header.js'
import SearchBar from './components/SearchBar.js'
import Footer from './components/Footer.js'
import ico from '../public/code-logo.png'

const setFavico = () => {
	//code snippet from https://stackoverflow.com/questions/260857/changing-website-favicon-dynamically
	let link = document.querySelector("link[rel~='icon']");
	if (!link) {
	    link = document.createElement('link');
	    link.rel = 'icon';
	    // link.type = 'image/png'
	    document.getElementsByTagName('head')[0].appendChild(link);
	}
	// link.href = 'https://stackoverflow.com/favicon.ico';
	link.href = ico;
}

const App = () => {
	useEffect(() => {
		setFavico();
	});

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