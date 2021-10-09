import styles from '../styles/Footer.module.css'

const GridColumn = ({title, data}) => {
	/* component takes:
	 	title (string)
		data (list of objects)

		data example:
		[
			{ url : "#", name : "name" },
			{ url : "#", name : "name" },
			{ url : "#", name : "name" },
			{ url : "#", name : "name" },
		]
	*/

	return(
		<div className={styles.gridColumn} >
			<h3 className={styles.title} >{title}</h3>
			{data.map( (link, key) => <a key={key+name} className={styles.link} href={link.url}>{link.name}</a> )}
		</div>
	);
}

const Footer = ({className}) => {
	const codingData = [
		{ url : "https://css-tricks.com", name : "css tricks" },
		{ url : "https://developer.mozilla.org/", name : "MDN" },
		{ url : "https://www.uidesigndaily.com", name : "UI daily" }
	]

	const githubReposData = [
		{ url : "https://github.com/brtkev", name : "Profile" },
		{ url : "https://github.com/gitname/react-gh-pages", name : "react gh-pages" },
		{ url : "https://github.com/IanLunn/Hover", name : "hover animations" }
	]

	const cryptoData = [
		{ url : "https://www.tradingview.com/chart", name : "TradingView" },
		{ url : "https://www.binance.com/en", name : "Binance" },

	]

	return(
		<footer className={`${styles.container} ${className}`} >
			<section className={styles.grid} >
				<GridColumn  title={"Coding"} data={codingData} />
				<GridColumn  title={"Github"} data={githubReposData} />
				<GridColumn  title={"Trading"} data={cryptoData} />
				
			</section>
		</footer>
	)
}

export default Footer;