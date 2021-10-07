import styles from './styles/Home.module.css'
import Header from './components/Header.js'
import Favorites from './components/Favorites.js'
import image from './public/twitter-icon.png';

const Home = () => {
	const url = new URL('./public/twitter-icon.png', import.meta.url)
	return (
		<div className={styles.container}>
			<ul className={styles.ul} >
				<li className={styles.li} >
					<img className={styles.img} src={require('./public/twitter-icon.png')} alt="logo"></img>
					<p className={styles.text} >logo name</p>
				</li>
				<li className={styles.li} >
					<img className={styles.img} src={image} alt="logo"></img>
					<p className={styles.text} >logo name</p>
				</li>
				<li className={styles.li} >
					<img className={styles.img} src={url} alt="logo"></img>
					<p className={styles.text} >logo name</p>
				</li>
				<li className={styles.li} >
					<img className={styles.img} src="./public/twitter-icon.png" alt="logo"></img>
					<p className={styles.text} >logo name</p>
				</li>
				<li className={styles.li} >
					<img className={styles.img} src={image} alt="logo"></img>
					<p className={styles.text} >logo name</p>
				</li>
				<li className={styles.li} >
					<img className={styles.img} src="./public/twitter-icon.png" alt="logo"></img>
					<p className={styles.text} >logo name</p>
				</li>
				
			</ul>
		</div>
	);
}

export default Home;