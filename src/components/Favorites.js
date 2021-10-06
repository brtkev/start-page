import styles from '../styles/Favorites.module.css'
import Link from '../components/Link'

const Favorites = ({className}) => {

	return (
		<div className={`${className} ${styles.container}`} >
			<h3 className={styles.title} >Favorites</h3>
			<ul>
				<li className={styles.li}><Link href="https://www.youtube.com">youtube</Link></li>
				<li className={styles.li}><Link href="#">list item</Link></li>
				<li className={styles.li}><Link href="#">list item</Link></li>
				<li className={styles.li}><Link href="#">list item</Link></li>
				<li className={styles.li}><Link href="#">list item</Link></li>
				<li className={styles.li}><Link href="#">list item</Link></li>
				<li className={styles.li}><Link href="#">list item</Link></li>
				<li className={styles.li}><Link href="#">list item</Link></li>
			</ul>
		</div>
	);
}

export default Favorites;