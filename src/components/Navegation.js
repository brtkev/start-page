import styles from '../styles/Navegation.module.css'

const Navegation = ({className}) => {


	return(
		<nav className={styles.container} >
			<ul className={styles.ul} >
				<li className={styles.li} >
					<img src="" alt="home icon"></img>
				</li>
				<li className={styles.li} >
					<img src="" alt="tools icon"></img>
				</li>
				<li className={styles.li} >
					<img src="" alt="plus icon"></img>
				</li>
			</ul>
		</nav>
	);
}

export default Navegation;