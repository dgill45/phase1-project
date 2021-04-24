const baseURL = 'https://www.thecocktailbd.com';
function getDrinks(){
    fetch(`${baseURL}` + `/api/json/v1/1/search.php?s=`)
    .then (res => res.json())

    .then (json => console.log(json))}

    document.getElementById("myP").innerHTML = "Hello Dolly.";