import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../Domains/dish';
import { Promotion } from '../Domains/promotion';
import { Leader } from '../Domains/leader';

import { DishService } from '../Services/dish.service';
import { PromotionService } from '../Services/promotion.service';
import { LeaderService } from '../Services/leader.service';

import { flyInOut, expand } from '../Animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  featuredLeader: Leader;

  dishErrMessage: string;

  constructor(private dishService: DishService, 
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .subscribe((dish) => (this.dish = dish),
        dishErrMessage => this.dishErrMessage = dishErrMessage);

    this.promotionService.getFeaturedPromotion()
      .subscribe((promotion) => (this.promotion = promotion));

    this.leaderService.getFeaturedLeader()
      .subscribe((leader) => (this.featuredLeader = leader));
  }

}
