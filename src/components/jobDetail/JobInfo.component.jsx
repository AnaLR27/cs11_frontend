import styles from './jobInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faBriefcase,
	faLocationDot,
	faSackDollar,
} from '@fortawesome/free-solid-svg-icons';
import Badge from '../Badge.component';

function JobInfo({
	refLogo,
	companyName,
	specialty,
	location,
	registerAt,
	salary,
	workDay,
	jobType,
}) {
	const urlIMG =
		'https://img2.gratispng.com/20180822/alk/kisspng-logo-product-design-brand-data-stannum-technologies-custom-solutions-real-result-5b7d98a5f024f3.5383849615349577339836.jpg';

	// TODO : Terminarlo
	return (
		<div className={styles['auto-container']}>
			<div className={styles['job-block']}>
				<img
					src={`${urlIMG}`}
					alt='Company Logo'
					className={styles['company-img']}
				/>
				<h4 className={styles['job-title']}>{companyName}</h4>
				<ul className={styles['job-info']}>
					<li>
						<span>
							<FontAwesomeIcon icon={faBriefcase} />
							{specialty}
						</span>
					</li>
					<li>
						<span>
							<FontAwesomeIcon icon={faLocationDot} />
							{location.city},{location.country}
						</span>
					</li>
					<li>
						<span>
							<FontAwesomeIcon icon={faClock} />
							{registerAt}
						</span>
					</li>
					<li>
						<span>
							<FontAwesomeIcon icon={faSackDollar} />
							{salary * 0.8}k - {salary * 1.2}k
						</span>
					</li>
				</ul>
				<div className={styles['job-other-info']}>
					<Badge
						type='primary'
						text={workDay}
					/>
					<span>{jobType}</span>
				</div>
			</div>
		</div>
	);
}

export default JobInfo;
