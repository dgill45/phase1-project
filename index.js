const baseURL = 'https://www.thecocktaildb.com';

/*gets drinks object from api*/

function getDrinks(){
    fetch(`${baseURL}` + `/api/json/v1/1/search.php?s=`)
    .then (res => res.json())

    .then (json => json.drink.forEach((drink) => {
        const drinkCard = createDrinkCard(drink);
        drinkCard.appendChild(document.getElementById('card-box'))
    }
    ));
}

/*function loadCard(){


}

/*function createIngredient(strIngredient${value}){
    for (var i = 1; i < 16; i++);{
        document.createElement('li')
    }if{strIngredient === null}
}*/

function createDrinkCard(drink){
    const card = document.createElement('div')
        img = document.createElement('img')
        card_body = document.createElement('div')
        h2 = document.createElement('h2')
        ul = document.createElement('ul')
        /*li = createIngredient();*/
        p = document.createElement('p')

        img.src = drink.strDrinkThumb + '/preview';
        card_body;
        h2.innerHTML = drink.strDrink;
        ul.innerHTML = drink.strIngredient;
        p.textContent = drink.strInstructions;

        card.appendChild(img)
        card.appendChild(card_body)
        card.appendChild(h2)
        card.appendChild(ul)
        card.appendChild(p)

        return card;

}

const testDrinkCard = {
strDrink: "GG",
strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
strGlass: "Collins Glass",
strIngredient1: "Galliano",
strIngredient2: "Ginger ale",
strIngredient3: "Ice",
strIngredient4: null,
strInstructions: "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG."
}

createDrinkCard(testDrinkCard)