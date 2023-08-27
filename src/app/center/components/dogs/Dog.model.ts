import { NumberSymbol } from '@angular/common';

export class Dog {
  constructor(
    public image_link: string,
    public good_with_children: number,
    public good_with_other_dogs: number,
    public shedding: number,
    public grooming: number,
    public drooling: number,
    public coat_length: number,
    public good_with_strangers: number,
    public playfulness: number,
    public protectiveness: number,
    public trainability: number,
    public energy: number,
    public barking: number,
    public min_life_expectancy: number,
    public max_life_expectancy: number,
    public max_height_male: number,
    public max_height_female: number,
    public max_weight_male: number,
    public max_weight_female: number,
    public min_height_male: number,
    public min_height_female: number,
    public min_weight_male: number,
    public min_weight_female: number,
    public name: string
  ) {}
}
