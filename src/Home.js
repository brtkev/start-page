import styles from './styles/Home.module.css'
import Header from './components/Header.js'
import Favorites from './components/Favorites.js'
import { githubLogo, gmailLogo, youtubeLogo, linkedinLogo } from './images.js'

const HomeAppButton = ({href, image, alt, children}) => {

	return (
		<li className={styles.li} >
			<a className={styles.a} href={href} >
				<img className={styles.img} src={image} alt={alt} ></img>
				<p className={styles.text} >{children}</p>
			</a>
		</li>
	);
}

const Home = () => {
	return (
		<div className={styles.container}>
			<ul className={styles.ul} >
				<HomeAppButton href="https://mail.google.com/mail/u/0/" image={gmailLogo} alt="gmail logo" >gmail</HomeAppButton>
				<HomeAppButton href="https://www.youtube.com" image={youtubeLogo} alt="youtube logo" >youtube</HomeAppButton>	
				<HomeAppButton href="https://www.linkedin.com/feed/" image={linkedinLogo} alt="linkedin logo" >linkedin</HomeAppButton>
				<HomeAppButton href="https://github.com" image={githubLogo} alt="github logo" >github</HomeAppButton>	

			</ul>
		</div>
	);
}

export default Home;