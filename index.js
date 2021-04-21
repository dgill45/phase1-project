const baseURL = 'https://www.thecocktaildb.com';

function getDrinks(){
fetch("https://sportplaces.api.decathlon.com/api/v1/places?origin=-74.269,40.792&radius=20&sports=175")
.then (res => res.json())

.then (json => console.log(json));
}
