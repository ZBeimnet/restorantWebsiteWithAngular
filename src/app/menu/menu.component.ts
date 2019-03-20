import { Component, OnInit } from '@angular/core';
import { Dish } from '../Domains/dish';
import { DISHES } from '../Domains/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //typescript assign the datatype of DISHES to dishes automatically
  dishes = DISHES;  

  selectedDish: Dish;

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectedDish: Dish) {
    this.selectedDish = selectedDish;  
  }

}
