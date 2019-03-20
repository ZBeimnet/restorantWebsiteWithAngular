import { Component, OnInit } from '@angular/core';
import { Dish } from '../Domains/dish';
import { DishService } from '../Services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //typescript assign the datatype of DISHES to dishes automatically
  dishes: Dish[];  

  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {

    this.dishes = this.dishService.getDishes();

  }

  onSelect(selectedDish: Dish) {
    this.selectedDish = selectedDish;  
  }

}
