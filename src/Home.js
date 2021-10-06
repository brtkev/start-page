import styles from './styles/Home.module.css'
import Header from './components/Header.js'
import Favorites from './components/Favorites.js'

const Home = () => {

	return (
		<div className={styles.container}>
			<ul className={styles.ul} >
				<li className={styles.li} >
					<image className={styles.img} src="../public/twitter-icon.png" alt="logo"></image>
					<p className={styles.text} >logo name</p>
				</li>
				<li className={styles.li} >
					<image className={styles.img} src="../public/twitter-icon.png" alt="logo"></image>
					<p className={styles.text} >logo name</p>
				</li>
				<li className={styles.li} >
					<image className={styles.img} src="../public/twitter-icon.png" alt="logo"></image>
					<p className={styles.text} >logo name</p>
				</li>
				<li className={styles.li} >
					<image className={styles.img} src="../public/twitter-icon.png" alt="logo"></image>
					<p className={styles.text} >logo name</p>
				</li>
				<li className={styles.li} >
					<image className={styles.img} src="../public/twitter-icon.png" alt="logo"></image>
					<p className={styles.text} >logo name</p>
				</li>
				<li className={styles.li} >
					<image className={styles.img} src="../public/twitter-icon.png" alt="logo"></image>
					<p className={styles.text} >logo name</p>
				</li>
				
			</ul>
		</div>
	);
}

export default Home;