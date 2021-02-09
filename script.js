fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    .then(res => res.json())
    .then(data => displayFoods(data.meals));

const displayFoods = meals => {
    let items = document.getElementById("foodList");
    for (let i = 0; i < meals.length; i++) {
        const element = meals[i];
        const itemsDiv = document.createElement("div");

        itemsDiv.className = `foodDisplay`
        const foodInfo = `
            <div onclick="foodDetails('${element.strMealThumb}')">
            <img class="img" src='${element.strMealThumb}'>
            <h5 class="fontBox">${element.strMeal}</h5>
            </div>
            `
        itemsDiv.innerHTML = foodInfo;
        items.appendChild(itemsDiv);
    }
}
const foodDetails = name =>{
    const url = `${name}`
    console.log(url)
    
}