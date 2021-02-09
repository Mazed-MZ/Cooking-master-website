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
    const itemIngradients = document.getElementById("itemsDetails");
    const search = document.getElementById("search");
    search.style.display ='none';
    const foodDiv = document.getElementById("foodList");
    foodDiv.style.display ='none';
    const itemInfo = `
        <img class="itemImg" src="${name}">
        <h1 class="title">Ingradients</h1>
        <div class="ingradients">
        <h5>✅ 1 tbsp Olive Oil</h5>
        <h5>✅ 1 onnion, finally chopped</h5>
        <h5>✅ 2 garlic cloves, crushed</h5>
        <h5>✅ 120g chorizp, diced</h5>
        <h5>✅ 2x4g canes chopped tomatoes</h5>
        <h5>✅ 1 tsp caster suger</h5>
        </div>
    `
    itemIngradients.innerHTML = itemInfo;
}