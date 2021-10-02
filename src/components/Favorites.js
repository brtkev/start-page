import styles from '../styles/Favorites.module.css'

const Favorites = ({className}) => {

	return (
		<div className={`${className}`} >
			<h3>Favorites</h3>
			<ul>
				<li>list item</li>
				<li>list item</li>
				<li>list item</li>
				<li>list item</li>
				<li>list item</li>
				<li>list item</li>
				<li>list item</li>
				<li>list item</li>
				<li>list item</li>
				<li>list item</li>
			</ul>
		</div>
	);
}

export default Favorites;