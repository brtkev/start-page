import styles from '../styles/Header.module.css';
import Clock from './Clock.js';
import { githubLogo, gmailLogo, youtubeLogo, linkedinLogo } from './images.js'

const HeaderButton = ({href, image, alt, children}) => {

	return (
		<li className={styles.li} >
			<a className={styles.a} href={href} >
				<div className={styles.imgBox} >
					<img className={styles.img} src={image} alt={alt}  />
				</div>
				{/*<p className={styles.text} >{children}</p>*/}
			</a>
		</li>
	);
}


const Header = ({className}) => {
	
	return (
		<nav className={`${styles.container} ${className}`} >
			<ul className={styles.ul} >
				<HeaderButton href="https://mail.google.com/mail/u/0/" image={gmailLogo} alt="gmail logo" >gmail</HeaderButton>
				<HeaderButton href="https://www.youtube.com" image={youtubeLogo} alt="youtube logo" >youtube</HeaderButton>	
				<Clock />
				<HeaderButton href="https://www.linkedin.com/feed/" image={linkedinLogo} alt="linkedin logo" >linkedin</HeaderButton>
				<HeaderButton href="https://github.com" image={githubLogo} alt="github logo" >github</HeaderButton>
			</ul>
		</nav>
	);
}

export default Header;