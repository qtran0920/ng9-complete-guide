import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Irish Creme Chocolate Trifle', 'I was given a bottle of Irish cream liqueur as a gift and had leftover peppermint candy, so I created this delicious trifle. It\'s always rich and decadent. —Margaret Wilson, Sun City, California', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Irish-Creme-Chocolate-Trifle_EXPS_SDDJ18_28545_C08_03_9b-2-696x696.jpg'),
    new Recipe('Irish Creme Chocolate Trifle', 'I was given a bottle of Irish cream liqueur as a gift and had leftover peppermint candy, so I created this delicious trifle. It\'s always rich and decadent. —Margaret Wilson, Sun City, California', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Irish-Creme-Chocolate-Trifle_EXPS_SDDJ18_28545_C08_03_9b-2-696x696.jpg')];
  constructor() { }

  ngOnInit(): void {
  }

}
