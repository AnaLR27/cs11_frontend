export function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
  
    const meses = [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun",
      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ];
  
    const mes = meses[fecha.getMonth()];
    const dia = fecha.getDate();
    const anio = fecha.getFullYear();
  
    const fechaFormateada = `${dia} ${mes} ${anio}`;
  
    return fechaFormateada;
  }

  export default formatearFecha;