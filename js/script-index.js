$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

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

