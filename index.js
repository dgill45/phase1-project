const baseURL = 'https://www.thecocktaildb.com';
const input = document.getElementById('search');
const submitBtn = document.getElementById('submit-button');
 submitBtn.addEventListener('click', function(event) {
        //console.log('hello')//
        event.preventDefault()
        //console.log(input.value)
        getDrinksByValue(input.value)
    })
function addClick(){
    
   
}

/*gets drinks object from api*/
function getDrinksByValue(value){
    const URL = (`${baseURL}/api/json/v1/1/search.php?s=${value}`)
    fetch(URL)
    .then (res => res.json())
    .then(drinkObj => {
        
       // console.log(drinkObj.drinks[0]);
        loadDrinks(drinkObj.drinks);
    })
    //.catch(error => console.log(error)); 
}

//loads each drink object into a card//
function loadDrinks(drinksArray){
    // console.log(drinksArray);
    const drinkCardBox = document.getElementById('card-box');
    //const drinkObj = drinksArray[0];
     drinkCardBox.innerHTML = ' ';
    drinksArray.forEach(selectedDrink => {
        console.log(selectedDrink);
        const drinkCard = createDrinkCard(selectedDrink);
        // drinkCard.appendChild(document.getElementById('card-box'));
       
        drinkCardBox.appendChild(drinkCard);
    });
}


function createDrinkCard(drinkObj){
    
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
        button.classList.add('button');
        hide.classList.add('hidden');

        img.src = drinkObj.strDrinkThumb + '/preview';
        h2.textContent = drinkObj.strDrink;
        ul.innerHTML = 'Ingredients/Instructions';

        for (let i = 1; i <= 15; i++){
            if (drinkObj['strIngredient${i}']) {
                let li = document.createElement('li');
                li.textContent = drinkObj['strIngredient${i}'];
                ul.appendChild(li);
            }
        }
        
        p.textContent = drinkObj.strInstructions;
        button.innerHTML = "How to Make";

        button.addEventListener('click', function() {
            hide.classList.toggle('hidden');
        });

        card.appendChild(img)
        card.appendChild(card_body)
        card.appendChild(h2)
        card.appendChild(hide)
        hide.appendChild(ul)
        hide.appendChild(li1)
        hide.appendChild(li2)
        hide.appendChild(li3)
        hide.appendChild(p)
        
        console.log(card)
        return card;
}

//getDrinksByValue().then(selectedDrink => loadDrinks(selectedDrink));