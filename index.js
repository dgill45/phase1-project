const baseURL = 'https://www.thecocktaildb.com';

/*gets drinks object from api*/

function getDrinks(){
fetch(`${baseURL}` + `/api/json/v1/1/search.php?s=`)
.then (res => res.json())

.then (json => console.log(json));
}


/*<div class="card" style="width: 18rem;">
            <img class="card-img-top" src='https://unsplash.com/photos/TVOAbbLL050' alt="Margarita">
            <div class="card-body">
              <h5 class="card-title"></h5>Margarita
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">How to Make</a>
            </div>*/


function createDrinkCard(){
    const card = 
}