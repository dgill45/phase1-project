const baseURL = 'https://www.thecocktaildb.com';
/*gets drinks object from api*/
function getDrinks(){
    const URL = (`${baseURL}/api/json/v1/1/search.php?s=`)
    return fetch(URL)
    .then (res => res.json())
    /*.then(json => console.log(json));*/
    // .catch(error => console.log(error)); //
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
        ul = document.createElement('ul'),
        li1 = document.createElement('li'),
        li2 = document.createElement('li'),
        li3 = document.createElement('li'),
        p = document.createElement('p');
        img.src = drinkObj.strDrinkThumb;
        card_body;
        h2.textContent = drinkObj.strDrink;
        ul.innerHTML = 'Ingredients';
        li1.textContent = drinkObj.strIngredient1;
        li2.textContent = drinkObj.strIngredient2;
        li3.textContent = drinkObj.strIngredient3;
        p.textContent = drinkObj.strInstructions;
        card.appendChild(img)
        card.appendChild(card_body)
        card.appendChild(h2)
        card.appendChild(ul)
        card.appendChild(li1)
        card.appendChild(li2)
        card.appendChild(li3)
        card.appendChild(p)
        console.log(card)
        return card;
}

getDrinks()
.then(drinksArray => {
    // console.log(drinksArray);
    loadDrinks(drinksArray);
});