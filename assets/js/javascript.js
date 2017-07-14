//Almacenamiento de valores y variables
var frutas = [];
var lista = document.getElementById("lista");
//Cuando hacen click y agregar funcionalidad
var addFruta = document.getElementById("agregar");
addFruta.onclick = function(){
  var nuevaFruta = document.getElementById("frutas").value;
  nuevaFruta = nuevaFruta.charAt(0).toUpperCase() + nuevaFruta.slice(1).toLowerCase();
  var frutaRepetida = false;
  for(var i = 0; i < frutas.length; i++){
    if(nuevaFruta == frutas[i]){
      frutaRepetida = true;
      alert("Esta fruta ya se encuentra en el catálogo");
      document.getElementById("frutas").value = "";
      break;
    }
  }
  if (!isNaN(parseInt(nuevaFruta))){
    alert("Los números no se llevan bien con las frutas");
    document.getElementById("frutas").value = "";
  } else if ((nuevaFruta == " ") || (nuevaFruta == "")){
    alert("Esa fruta no sabe a nada, intenta otra vez");
    document.getElementById("frutas").value = "";
  }
  else if (frutaRepetida == false) {
    frutas.push(nuevaFruta);
    document.getElementById("frutas").value = "";
    lista.innerHTML = mostrar(frutas);
  }
}
//Función para mostrar
function mostrar (arr){
  var html = "";
  for (var i = 0; i < frutas.length; i++){
    var id = i + 1;
    html += id + ". " + frutas[i] + "</br>";
  }
  return html;
}
