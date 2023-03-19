async function FetchAllUsers (email, name, refused, job, acepted) {
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'auth-token': sessionStorage.getItem('token') ? sessionStorage.getItem('token') : localStorage.getItem('token') },
            body: JSON.stringify({ email: email, name: name, job: job, acepted: acepted, refused: refused })
        };
        const getDatas = async () => {
            try{
            const response = await fetch('http://localhost:8000/job/email', requestOptions)
            const data = await response.json();
            console.log(data);
            return true
            }catch(error){
                return false
            }
        
        }
        let datas = await getDatas();
    }

export default FetchAllUsers;