

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
const search = new Search('pizza');
search.getResults();
console.log(search);









