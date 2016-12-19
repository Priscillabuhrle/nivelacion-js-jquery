$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
/*function renderHighlightedRecipes(recipesArray) {
	
	var buscar= recipesArray;
	for(var i=0; i< buscar.length ; i++){

		if( buscar == buscar.hasOwnProperty("highlighted") ) {
			return true;
			console.log('Recipes: ', recipesArray);
		}
		renderRecipe(buscar);
	}
}
renderHighlightedRecipes(recipesArray);*/
   


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
 /*function renderRecipe(recipe) {
  console.log('Voy a pintar la receta: ', recipe);
  var divMadre= document.getElementByClassName("list-recipes");
  var atribTitulo= document.getAttribute("title");
  var atribAutor = document.getAttribute("source.name");
  /*lo inserto en el html
  divMadre.appendChild(atribTitulo);
  divMadre.appendChild(atribAutor);
}
renderRecipe(recipe);*/



/*
* Función que se encarga de pintar todas las actividades
*/
/* se copio la funcion y se agrego en un script en el html línea 81, para ver si funcionaba
 onload= function renderActivities(activitiesArray) {
  console.log('Activities: ', activitiesArray);
}
renderActivities(activitiesArray);*/
/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}

/*función esconder flecha ejercicio uno
function esconder(){
	document.getElementById("js-back").style.display= 'none';
}
esconder();
body.onload = function esconder(){
	document.getElementById("pbocul").style.display= 'none';
}
esconder();*/

 

/*función esconder flecha ejercicio uno*/

 function esconder(){
   
	var ocul= document.getElementById("oculflecha");
	ocul.style.display= "none";
}
esconder();

/* ejercicio dos, pintar taxto */
function printNews(){
	var cajaTexto=document.getElementById("agregarTexto");
	var crearnodotexto=document.createTextNode("Nuevas Recetas");
	cajaTexto.appendChild(crearnodotexto);
}
printNews();

