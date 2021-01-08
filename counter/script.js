function cambio(x){
  let numero=document.getElementById('h1').innerHTML;
  if (x) {
    document.getElementById('h1').innerHTML = ++numero;
  }else {
    document.getElementById('h1').innerHTML = --numero;
  }

}
