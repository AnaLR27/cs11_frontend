//Definir la función que manejará la solicitud de API
function like(loginId) {
    let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJpZCI6IjYzZjQ3NjY4MGEwMmU0NTJlMThjMzJiNCIsImVtYWlsIjoiZW1wbG95ZXJAZXhhbXBsZS5jb20iLCJyb2xlIjoiZW1wbG95ZXIifSwiaWF0IjoxNjc4NzgzMDgyLCJleHAiOjE2Nzg3ODQyODJ9.5CNNKgipIIFwM67WtvHb1y1UeRoXkyBHPA2VanzSoO4";
    // Hacer la solicitud de API para que se agregue a la lista de favoritos(el candidato) por parte de la empresa
    fetch('https://codejob.nel386.repl.co/candidate/'+loginId+'/watchlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         "auth-token": token
      },
      body: JSON.stringify({
        // Si es necesario, incluir cualquier dato adicional que deba enviarse con la solicitud
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
  

export default like;
  