const baseURL = 'https://www.thecocktaildb.com';
/*gets drinks object from api*/
function getDrinks(){
    const URL = (`${baseURL}/api/json/v1/1/search.php?s=`)
    return fetch(URL)
    .then (res => res.json())
    /*.then(json => console.log(json));*/
    .catch(error => console.log(error)); 
}
function loadDrinks(drinksArray){
    // console.log(drinksArray);
    const drinkCardBox = document.getElementById('card-box');
    // const drinkObj = drinksArray[0];
    drinksArray.drinks.forEach(drinkObj => {
        const drinkCard = createDrinkCard(drinkObj);
        // drinkCard.appendChild(document.getElementById('card-box'));
        drinkCardBox.appendChild(drinkCard);
    });
}


function createDrinkCard(drinkObj){
    console.log(drinkObj);
    let card = document.createElement('div'),
        img = document.createElement('img'),
        card_body = document.createElement('div'),
        h2 = document.createElement('h2'),
        hide = document.createElement("div"),
        ul = document.createElement('ul'),
        li1 = document.createElement('li'),
        li2 = document.createElement('li'),
        li3 = document.createElement('li'),
        p = document.createElement('p'),
        button = document.createElement('button');

        card.classList.add('card');
        img.classList.add('card-image-top');
        h2.classList.add('card-title');
        hide.classList.add('hidden');
        hide.classList.add('secret');
        button.classList.add('button');

        img.src = drinkObj.strDrinkThumb + '/preview';
        card_body;
        h2.textContent = drinkObj.strDrink;
        hide;
        ul.innerHTML = 'Ingredients';
        li1.textContent = drinkObj.strIngredient1;
        li2.textContent = drinkObj.strIngredient2;
        li3.textContent = drinkObj.strIngredient3;
        p.textContent = drinkObj.strInstructions;
        button.innerHTML = "How to Make";

        card.appendChild(img)
        card.appendChild(card_body)
        card.appendChild(h2)
        card.appendChild(hide)
        hide.appendChild(ul)
        hide.appendChild(li1)
        hide.appendChild(li2)
        hide.appendChild(li3)
        hide.appendChild(p)
        card.appendChild(button)
        console.log(card)
        return card;
}

getDrinks()
.then(drinksArray => {
    // console.log(drinksArray);
    loadDrinks(drinksArray);
});

  
function showDrink() {
    //get the div with class hidden//
    const display = document.querySelector('.secret');
    const displaySetting = display.style.display;
    if (displaySetting === "block") {
    //div with class hidden is visible, hide it//
      display.style.display = "none";
      //change button text//
      drinkBtn.innerHTML = 'How to Make';
    } else {
    //div is hidden, show it//
      display.style.display = "block";
      //change button text//
      drinkBtn.innerHTML = 'Hide';
    }
  }
  
  const drinkBtn = document.querySelector('.button');
drinkBtn.addEventListener('click', function(){
    showDrink();
  })
  
  /*<div class="card-body">
              <div class='hidden'>
                <ul>Ingredients
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <p class="card-text">Instructions. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div>
                <button type ='button' class ='hidden'>How to Make</button>
            </div>*/


    /*const testDrinkCard = {
    strDrink: "GG",
    strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
    strGlass: "Collins Glass",
    strIngredient1: "Galliano",
    strIngredient2: "Ginger ale",
    strIngredient3: "Ice",
    strInstructions: "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG."
    }

/*function getDrinksByValue(value){
    fetch(`${baseURL}` + `/api/json/v1/1/search.php?s=${value}`)
    .then (res => res.json())

    .then (json => json.drink.forEach((drink) => {
        console.log(drink)
        const drinkCard = createDrinkCard(drink);
        drinkCard.appendChild(document.getElementById('card-box'))
        }  
    ))
    .catch(error => console.log(error));
  
}
function addClick(){
    const input = document.getElementById('search')
    const submitBtn = document.getElementById('submit-button')
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault()
        getDrinksByValue(input.value)
        
    })
}

/*function loadCard(){*/

/*function createIngredient(strIngredient){
    for (var i = 1; i < 16; i++);{
        document.createElement('li')
    }
}*/
/*<div class="card" style="width: 18rem;">
            <img class="card-img-top" src='https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg' alt="Margarita">
              <h5 class="card-title"></h5>Margarita
            <div class="card-body">
              <ul>Ingredients
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="card-text">Instructions. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary" class = "hidden">How to Make</a>
            </div>
          </div>*/
/*
createDrinkCard(testDrinkCard)*/


