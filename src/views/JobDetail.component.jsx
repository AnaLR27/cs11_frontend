// import styles from '../styles/jobDetail.module.css';
import { useEffect, useState } from "react";
import { JobService } from "../services/JobService";
import { JobModel } from "../models/postAJob.model";
import Loader from "../components/UI/Spinner/Loader";
import { useParams } from "react-router";
// import JobInfo from '../components/jobDetail/JobInfo.component';

function JobDetail() {
  const [loading, setLoading] = useState(true);
  const [jobData, setJobData] = useState();
  const params = useParams();
  const jobIdParam = params.jobId;

  console.log(jobIdParam);

  const jobInfo = async () => {
    try {
      const data = await JobService.getById( jobIdParam );
      setJobData(data);
      setLoading(false);
    } catch (error) {
      return error;
    }
  };
  console.log( jobData);

  useEffect(() => {
    jobInfo();
  }, []);

  return (
    <section>
      <p>{jobData.jobType}</p>
      <p>{jobData.location.city}</p>
      <p>{jobData.jobType}</p>
    </section>
  );
}

export default JobDetail;

// {`mailto:${infoCandidate.email}`} realiza la función de un href, pero en este caso es para enviar un correo electrónico.
