import axios from 'axios';
import {key, proxy} from '../js/config'


export default class Search {
    constructor(query){
        this.query = query;
    }
    async getResults(){
        
        const nKey = '8896254112594d059abf2cc06b3a27c7';
        const APIKEY = 'c22603a4c70b43e8321e97df2716d747'
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);  //axios is similar to fetch, it works in all browsers
           //const res = await axios(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${this.query}`);
            //console.log(res);
           //const res = await axios(`https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast?q=bangalore&appid=${APIKEY}`);
            
            console.log(res);
            
            this.result = res.data.recipes;
           // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }

}

