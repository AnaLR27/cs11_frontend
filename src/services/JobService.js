import { Job } from "../models/postAJob.model";

//GET: loginId (crear el job)
export const getById = async (jobId) => {
  const token =
    sessionStorage.getItem("accessToken") || localStorage.getItem("accessToken");

  if (!token) {
    return false;
  }

  // Cambiar URL y en userid poner jobId
  //petición all backend
  const request = await fetch(
    "http://localhost:8000/job/post-job" + jobId,

    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Auth-token": token,
      },
    }
  );
  const data = await request.json();
  return new Job(data.data);
};
export class JobService {
  //PATCH: Update->JobId || loginID
  static async editjob(jobId, body) {
    //cogemos el token del local storage
    const token =
      sessionStorage.getItem("token") || localStorage.getItem("token");

    //comprobamos si ha cogido el token
    if (!token) {
      return false;
    }
    // Peticion al backend
    try {
      const request = await fetch(
        `http://localhost:8000/job/edit-job/${jobId}`,
        {
          method: "PATCH",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
            "Auth-token": token,
          },
        }
      );
      const data = await request.json();
      return new Job(data.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  //POST:  Create-> UserId || loginID
  static async newjob(body) {
    //cogemos el token del local storage
    const token =
      sessionStorage.getItem("token") || localStorage.getItem("token");

    //comprobamos si ha cogido el token
    if (!token) {
      return false;
    }
    //Peticion al backend
    const request = await fetch("http://localhost:8000/job/post-job", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Auth-token": token,
      },
    });
    const data = await request.json();
    return new Job(data.data);
  }
}
