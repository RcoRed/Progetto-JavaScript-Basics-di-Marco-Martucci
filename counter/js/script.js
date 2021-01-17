function cambioPrimo(){
  let numero=document.getElementById('h1').innerHTML;
  numero = numero - 1;
  document.getElementById('h1').innerHTML = numero;
}

function cambioSecondo(){
  let numero=document.getElementById('h1').innerHTML;
  numero = +numero + 1;
  document.getElementById('h1').innerHTML = numero;

}

window.onload=function(){
  let primo=document.getElementById('primo');
  let secondo=document.getElementById('secondo');

  primo.addEventListener("click", cambioPrimo);
  secondo.addEventListener("click", cambioSecondo);
}
