import { Injectable } from '@angular/core';
import { Dish } from '../Domains/dish';
import { DISHES } from '../Domains/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }
}
