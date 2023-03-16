
async function FetchJobs (id) {
    const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json',
                            'auth-token': sessionStorage.getItem('token') ? sessionStorage.getItem('token') : localStorage.getItem('token') },
            };

    const getDatas = async (id) => {
        // const response = await fetch('http://localhost:8000/job/all-jobs', requestOptions)
        const response = await fetch(`http://localhost:8000/job/employer-jobs/${id}`, requestOptions)
        const data = await response.json();
        return data;
    }

    let datas = await getDatas(id);
    return datas;
}

    export default FetchJobs;



