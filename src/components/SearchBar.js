import styles from '../styles/SearchBar.module.css'

const SearchBar = ({className}) => {

	return ( 
		<div className={`${styles.container} ${className}`}  >
			<input type="text" className={styles.input} placeholder="Search" />

			<button className={styles.button} onClick={() => console.log("clicked")} >
				<img className={styles.icon} src="https://fonts.gstatic.com/s/i/materialiconsoutlined/clear/v11/24px.svg" alt="X icon" />
			</button>
		</div>
	);
}


export default SearchBar;