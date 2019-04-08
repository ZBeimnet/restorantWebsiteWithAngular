import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../Domains/dish';
import { DishService } from '../Services/dish.service';
import { flyInOut, expand } from '../Animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  //typescript assign the datatype of DISHES to dishes automatically
  dishes: Dish[];  
  errMessage: string;

  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {

    this.dishService.getDishes()
      .subscribe((dishes) => this.dishes = dishes,
        errMessage => this.errMessage = <any>errMessage);

  }


}
