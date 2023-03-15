
async function GetCandidateData(loginId = "") {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJpZCI6IjYzZjQ3NjY4MGEwMmU0NTJlMThjMzJiNCIsImVtYWlsIjoiZW1wbG95ZXJAZXhhbXBsZS5jb20iLCJyb2xlIjoiZW1wbG95ZXIifSwiaWF0IjoxNjc4NzgzMDgyLCJleHAiOjE2Nzg3ODQyODJ9.5CNNKgipIIFwM67WtvHb1y1UeRoXkyBHPA2VanzSoO4";
  // Realizamos la petición a la API para que nos devuelva los datos del candidato descargando el pdf
  try {
    const response = await fetch(
      "https://codejob.nel386.repl.co/candidate/" + loginId, 
      { 
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token
        },
      }
    );
    const responseJson = await response.json();
    return responseJson.data;
    // Aquí se puede manipular los datos obtenidos
  } catch (error) {
    console.error(error);
  }
}

export default GetCandidateData;
