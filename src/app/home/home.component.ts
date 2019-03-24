import { Component, OnInit } from '@angular/core';
import { Dish } from '../Domains/dish';
import { Promotion } from '../Domains/promotion';
import { DishService } from '../Services/dish.service';
import { PromotionService } from '../Services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;

  constructor(private dishService: DishService, 
    private promotionService: PromotionService) { }

  ngOnInit() {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }

}
