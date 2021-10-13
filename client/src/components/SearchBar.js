import styles from '../styles/SearchBar.module.css'

const getDDGURl = (search) => {

	const url = `https://duckduckgo.com/?q=${search.trim()}`
	return url;
}

const handleKeyPress = (ev) => {
	if(ev.key === "Enter"){
		if(ev.target.value){
			window.location.replace(getDDGURl(ev.target.value));
		}
	}
}

const SearchBar = ({className}) => {
	const placeholder = `Search with DuckDuckGo`;
	return ( 
		<div className={`${styles.container} ${className}`}  >
			<input type="text" className={styles.input} placeholder={placeholder} onKeyPress={handleKeyPress} />
		</div>
	);
}


export default SearchBar;