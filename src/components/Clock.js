import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css'

const weekdayFromNumber = (day) => {
	const weekdays = ['sun', 'mon', 'tues', 'wed', 'thu', 'fri', 'sat']
	return weekdays[day];
}

const monthFromNumber = (month) => {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return months[month];
}

const validateTwoDigits = number => {
	return number.toString().length === 1 ? '0' + number : number ;
}

const getTimeString = date => {
	let hour = validateTwoDigits(date.getHours());
	let min = validateTwoDigits(date.getMinutes());
	let sec = validateTwoDigits(date.getSeconds());
	return `${hour}:${min}:${sec}`
}

const getClockString = () => {
	const date = new Date();
	const dateString = `${weekdayFromNumber(date.getDay())}, ${date.getDate()} ${monthFromNumber(date.getMonth())}`
	return `${getTimeString(date)} - ${dateString}`
}

const Clock = () => {
	const [clockString, setClockString] = useState(getClockString());

	useEffect(() =>{
		setInterval(() => {
			setClockString(getClockString());
		}, 1000);
	});

	return(
		<li className={styles.li} >
			<p className={styles.clock} >{clockString}</p>
		</li>
	);
}

export default Clock;