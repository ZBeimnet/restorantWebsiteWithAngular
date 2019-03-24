import { Component, OnInit } from '@angular/core';
import { Dish } from '../Domains/dish';
import { Promotion } from '../Domains/promotion';
import { Leader } from '../Domains/leader';

import { DishService } from '../Services/dish.service';
import { PromotionService } from '../Services/promotion.service';
import { LeaderService } from '../Services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  featuredLeader: Leader;

  constructor(private dishService: DishService, 
    private promotionService: PromotionService,
    private leaderService: LeaderService) { }

  ngOnInit() {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
    this.featuredLeader = this.leaderService.getFeaturedLeader();
  }

}
