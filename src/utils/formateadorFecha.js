export function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
  
    const meses = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const mes = meses[fecha.getMonth()];
    const dia = fecha.getDate();
    const anio = fecha.getFullYear();
  
    const fechaFormateada = `${mes} ${dia}, ${anio}`;
  
    return fechaFormateada;
  }

  export default formatearFecha;