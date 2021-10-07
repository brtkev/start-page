import styles from './styles/Home.module.css'
import Header from './components/Header.js'
import Favorites from './components/Favorites.js'
import { githubLogo, gmailLogo, youtubeLogo, linkedinLogo } from './images.js'

const AppContainer = ({image, alt, children}) => {

	return (
		<li className={styles.li} >
			<img className={styles.img} src={image} alt={alt} ></img>
			<p className={styles.text} >{children}</p>
		</li>
	);
}

const Home = () => {
	return (
		<div className={styles.container}>
			<ul className={styles.ul} >
				<AppContainer image={gmailLogo} alt="gmail logo" >gmail</AppContainer>
				<AppContainer image={youtubeLogo} alt="youtube logo" >youtube</AppContainer>	
				<AppContainer image={githubLogo} alt="github logo" >github</AppContainer>	
				<AppContainer image={linkedinLogo} alt="linkedin logo" >linkedin</AppContainer>	

			</ul>
		</div>
	);
}

export default Home;