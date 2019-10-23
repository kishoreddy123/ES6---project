import axios from 'axios';


export default class Search {
    constructor(query){
        this.query = query;
    }
    async getResults(){
        const key = '6cdd8f4ea807d23fd7a090ea8b6dfe82';
        const nKey = '8896254112594d059abf2cc06b3a27c7';
        try {
            //const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);  //axios is similar to fetch, it works in all browsers
           const res = await axios(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${this.query}`);
            //console.log(res);
           // const res = await axios(`https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/search?key=${nKey}&query=${this.query}`);
            
            // console.log(res);
            
            this.result = res.data.results;
           // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }

}

