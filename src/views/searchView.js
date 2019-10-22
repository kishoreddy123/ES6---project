import {element} from "./base"
export const getInput = () => element.searchInput.value;
export const clearInput = () => {
    element.searchInput.value = '';
};
export const clearResult = () => {
    element.searchResultList.innerHTML = '';
}


/*
// 'Pasta with tomato and spinach'
acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato']
*/
// export const limitRecipeTitle = (title, limit = 17) => {   ///************* limit the title to specific characters */
//     const newTitle = [];
//     if (title.length > limit) {
//         title.split(' ').reduce((acc, cur) => {
//             if (acc + cur.length <= limit) {
//                 newTitle.push(cur);
//             }
//             return acc + cur.length;
//         }, 0);

//         // return the result
//         return `${newTitle.join(' ')} ...`;
//     }
//     return title;
// }

const renderRecipe = recipe => {
    if(recipe.title.length > 20){
        recipe.title = `${recipe.title.substr(1, 20)} ...`;
    }
    const markup = `
            <li>
                <a class="results__link" href="#23456">
                    <figure class="results__fig">
                        <img src="img/test-1.jpg" alt="${recipe.title}">
                    </figure>
                    <div class="results__data">
                        <h4 class="results__name">${recipe.title}</h4>
                        <p class="results__author">publisher:</p>
                    </div>
                </a>
            </li>
    `;
    console.log(recipe.title.length);
    
    element.searchResultList.insertAdjacentHTML('beforeend', markup);
}
export const renderResults = recipes => {
    // console.log(recipes);
    
    recipes.forEach(renderRecipe);
}