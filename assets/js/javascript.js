var frutas = [];
var lista = document.getElementById("lista");

//Cuando hacen click
var addFruta = document.getElementById("agregar");
addFruta.onclick = function(){
  var nuevaFruta = document.getElementById("frutas").value;
  frutas.push(nuevaFruta);
}

 function mostrar (arr){
   var html = "";
   for (var i = 0; i < frutas.length; i++){
     var id = i + 1;
     html += id + ". " + frutas[i];
   }
   lista.innerHTML = html;
 }
