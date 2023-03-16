

async function FetchAllUsers () {
    
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                        'auth-token': sessionStorage.getItem('token') ? sessionStorage.getItem('token') : localStorage.getItem('token')}, 
        };
        const getDatas = async () => {
            const response = await fetch('http://localhost:8000/candidate/all-candidates', requestOptions)
            const data = await response.json();
            return data;
        }
    
        let datas = await getDatas();
        return datas;
    }
    
    export default FetchAllUsers;