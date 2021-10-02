import styles from '../styles/Header.module.css';

const Header = ({className}) => {

	return (
		<div className={`${className} ${styles.container}`} >
			<div className={`${styles.underLine}`}>
				<h1 className={`${styles.gradientText}`} >12:40</h1>
			</div>
			<div className={`${styles.underLine} ${styles.rightSide}`}>
				<h1 className={`${styles.gradientText}`} >Sabado, 2 oct 2021</h1>
			</div>
		</div>
	);
}

export default Header;