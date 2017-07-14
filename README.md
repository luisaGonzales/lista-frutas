# PROYECTO LISTA DE FRUTAS
## DESCRIPCIÓN DEL PROYECTO
Este es un proyecto de la lección 13 "Git" y tiene la siguiente premisa:
>*La frutería "Master" está organizando su lista de pedidos, ahora acaba de recibir más variedades de frutas y quiere implementarlas, entonces debemos crear una lista que sea dinámica, donde se pueda agregar todoas las frutas que deseemos*

Para poder desarrollar este proyecto se han utilizado lenguajes html, css y javascript; además de la utilización de Git y GitHub.
### CÓDIGO
#### HTML
Gracias al código entregado en el proyecto anterior, se realizaron las siguientes acciones: Insertar una imagen, crear división de lista, crear un input para la fruta y crear un botón para entregar funcionalidad.
```html
  <body>
    <img src = "imgfruta.jpg"></imag>
    <p><strong>Catálogo:</strong></p>
    <div id = "lista"> </div>
    <input type ="text" id = "frutas" / >
    <button id = "agregar" type = "button" name = "button">Agregar</button>
    <script src= "js/javascript.js"></script>
  </body>
```
#### CSS
Se realizaron modificaciones al código del proyecto anterior; en colores asignados a background-color del body y width y height del botón.
#### JAVASCRIPT
Se tomaron en cuenta las siguientes probabilidades:
  * Se quiera ingresar una fruta repetida: En tal caso, devuelve una alerta y no lo agrega a la lista.
  * Se haya ingresado por error un número y se desee agregar: Devuelve una alerta y no lo agrega a la lista.
  * Se quiere ingresar un espacio o se presione agregar sin ingresar texto: Devuelve una alerta y  no se agrega a la lista.

Finalmente *imprime* la lista en el espacio designado en el HTML.
### GIT Y GITHUB
Como primer paso, se organizaron de manera local las carpetas a trabajar.
Seguidamente, se creó un *nuevo repositorio* en **GitHub** con el nombre de *"lista-frutas"* incializandose con un ***README.md***, al crearlo se copió la URL del mismo.
Se ingresaron las siguientes comandos de **Git** en la terminal:

```Git
git init
git remote add origin "https://github.com/luisaGonzales/lista-frutas.git"
git pull origin master
git add .
git commit -m "Lección 13"
git push origin master
```
Después de cada modificación se utilizaron los siguientes comandos:

```git
git status
git add <archivo modificado>
git commit -m "mensaje pertinente"
git status
git push origin master
```
