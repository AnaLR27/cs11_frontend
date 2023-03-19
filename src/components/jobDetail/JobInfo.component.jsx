import styles from './jobInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function JobInfo(props) {
	const urlIMG =
		'https://img2.gratispng.com/20180822/alk/kisspng-logo-product-design-brand-data-stannum-technologies-custom-solutions-real-result-5b7d98a5f024f3.5383849615349577339836.jpg';

	// TODO : Terminarlo
	return (
		<div className={styles['header-info']}>
			<img
				src={`${urlIMG}`}
				alt='Company Logo'
				className={styles['company-img']}
			/>
			<h4 className={styles['employer']}>{props.companyName}</h4>
			<ul className={styles['job-info']}>
				<li className={styles['job']}>{props.specialty}</li>
				<li>
					<span className={styles['date']}>
						<FontAwesomeIcon
							icon={faClock}
							className={styles['icon-fa-clock']}
						/>
						Miembro desde, {props.registerAt}
					</span>
				</li>
			</ul>
		</div>
	);
}

export default JobInfo;
