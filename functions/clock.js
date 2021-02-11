function clock() {
  /* NOSCRIPT */
  const sectionToDisplay = document.getElementById("section_global")
    .children[1];
  sectionToDisplay.classList.remove("noscript");

  let data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  str_segundos = new String(segundos);
  if (str_segundos < 10) {
    segundos = "0" + segundos;
  }
  str_minutos = new String(minutos);
  if (str_minutos < 10) {
    minutos = "0" + minutos;
  }
  str_hora = new String(hora);
  if (str_hora < 10) {
    hora = "0" + hora;
  }
  relogio_h = `${hora}`;
  relogio_m = `${minutos}`;
  relogio_s = `${segundos}`;

  document.getElementById("relogio_h").innerHTML = relogio_h;
  document.getElementById("relogio_m").innerHTML = relogio_m;
  document.getElementById("relogio_s").innerHTML = relogio_s;
  setTimeout("clock()", 1000);
}
