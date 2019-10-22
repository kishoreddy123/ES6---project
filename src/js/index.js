

/*
//if cors proxy is required then add cors proxy to the requested url

async function getResults(query){
    const key = '6cdd8f4ea807d23fd7a090ea8b6dfe82';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
   const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
   const result = res.data.recipes;
   console.log(result);
}
getResults('pizza');
*/

import Search from "../models/Search";
import * as searchView from "../views/searchView";
import {element, renderLoader, clearLoader} from "../views/base";

/** Global state of the object
 * -search object
 * current recipe object
 * shopping list objects
 * liked recipes
 */
const state = {};

const controlSearch = async () => {
    //1. get the query form the view
    const query = searchView.getInput();

    if(query){
        //2. create a new search object and add it to the state
        state.search = new Search(query);

        //3. Prepare UI results
        searchView.clearInput();
        searchView.clearResult();
        renderLoader(element.results);

        //4. Search for the recipes
        await state.search.getResults();

        //5. Render results  on UI
        // console.log(state.search.result);
        clearLoader();
        searchView.renderResults(state.search.result);
        

    }
}

element.searchForm.addEventListener('submit', e => {
    e.preventDefault(); // preventing the default behaviour of submit i.e., reloding the page
    controlSearch();
})
