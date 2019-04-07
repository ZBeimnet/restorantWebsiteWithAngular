import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../Domains/dish';
import { DishService } from '../Services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //typescript assign the datatype of DISHES to dishes automatically
  dishes: Dish[];  

  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {

    this.dishService.getDishes()
      .subscribe((dishes) => this.dishes = dishes);

  }


}
