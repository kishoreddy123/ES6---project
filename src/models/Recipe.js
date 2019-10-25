import axios from 'axios';
import {key, proxy} from '../js/config'

export default class Recipe{
    constructor(id) {
        this.id = id;
    }
    async getRecipe(){
        try {
            //console.log(this.id);
            
            const res = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.publisher = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.ingredients = res.data.recipe.ingredients;
            this.url = res.data.recipe.source_url;
            console.log(res);
            
        } catch (error) {
            console.log(error);
            
        } 

    }
    calcTime() {
        const noIng = this.ingredients.length;
        const periods = Math.ceil(noIng / 3);
        this.time = periods * 15;
    }; 
    calcServings() {
        this.servings = 4;
    }
}