import styles from '../styles/jobDetail.module.css';
import { useEffect, useState } from 'react';
import { JobService } from '../services/JobService';
import { JobModel } from '../models/postAJob.model';
import Loader from '../components/UI/Spinner/Loader';
import { useParams } from 'react-router';
import JobInfo from '../components/jobDetail/JobInfo.component';

function JobDetail() {
	const [loading, setLoading] = useState(true);
	const [jobData, setJobData] = useState(new JobModel());
	const jobIdParam = useParams();

	const jobInfo = async () => {
		try {
			const data = await JobService.getById({ jobIdParam });
			setJobData(data);
			setLoading(false);
		} catch (error) {
			return error;
		}
	};

	useEffect(() => {
		jobInfo();
	}, []);

	return (
		<section className={styles['job-detail-section']}>
			<div className={styles['header-section']}>
				<JobInfo
					companyName={jobData.companyName}
					specialty={jobData.specialty}
					location={jobData.location}
					registerAt={jobData.registerAt}
					salary={jobData.salary}
					workDay={jobData.workDay}
					jobType={jobData.jobType}
				/>
			</div>
			<div className={styles['auto-container']}>
				<div className={styles['description']}>
					<p>{jobData.description}</p>
				</div>
			</div>
			<div className={styles['col-lg-4']}></div>
		</section>
	);
}

export default JobDetail;

// {`mailto:${infoCandidate.email}`} realiza la función de un href, pero en este caso es para enviar un correo electrónico.
