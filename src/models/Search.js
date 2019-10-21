import axios from 'axios';


export default class Search {
    constructor(query){
        this.query = query;
    }
    async getResults(){
        const key = '6cdd8f4ea807d23fd7a090ea8b6dfe82';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);  //axios is similar to fetch, it works in all browsers
            this.result = res.data.recipes;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }

}