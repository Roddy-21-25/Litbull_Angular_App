import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Dog } from './Dog.model';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css', './dogs-modal.component.css']
})
export class DogsComponent implements OnInit {
  name: string;
  Data: any[];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    // this.LlenarData();
  }

  search(): void{
    this.apiService.GetData(this.name).subscribe(data => {
      this.Data = data;
      console.log(this.Data);
    })
  }

  DogTemplate: any;
  nameDog: string;
  UrlDof: string;
  min_height_female: number;
  min_height_male: number;
  max_height_female: number;
  max_height_male: number;
  min_weight_male: number;
  min_weight_female: number;
  max_weight_male: number;
  max_weight_female: number;
  min_life_expectancy: number;
  max_life_expectancy: number;
  shedding: number;
  barking: number;
  good_with_children: number;
  good_with_other_dogs: number;
  grooming: number;
  drooling: number;
  coat_length: number;
  good_with_strangers: number;
  playfulness: number;
  protectiveness: number;
  trainability: number;
  energy: number;

  LookDog(name: string){

    this.DogTemplate = this.Data.find(d => d.name == name);
    this.nameDog = this.DogTemplate.name;
    this.UrlDof = this.DogTemplate.image_link;
    this.min_height_female = this.DogTemplate.min_height_female;
    this.min_height_male = this.DogTemplate.min_height_male;
    this.max_height_female = this.DogTemplate.max_height_female;
    this.max_height_male = this.DogTemplate.max_height_male;
    this.min_weight_male = this.DogTemplate.min_weight_male;
    this.min_weight_female = this.DogTemplate.min_weight_female;
    this.max_weight_male = this.DogTemplate.max_weight_male;
    this.max_weight_female = this.DogTemplate.max_weight_female;
    this.min_life_expectancy = this.DogTemplate.min_life_expectancy;
    this.max_life_expectancy = this.DogTemplate.max_life_expectancy;
    this.shedding = this.DogTemplate.shedding;
    this.barking = this.DogTemplate.barking;
    this.good_with_children = this.DogTemplate.good_with_children;
    this.good_with_other_dogs = this.DogTemplate.good_with_other_dogs;
    this.grooming = this.DogTemplate.grooming;
    this.drooling = this.DogTemplate.drooling;
    this.coat_length = this.DogTemplate.coat_length;
    this.good_with_strangers = this.DogTemplate.good_with_strangers;
    this.playfulness = this.DogTemplate.playfulness;
    this.protectiveness = this.DogTemplate.protectiveness;
    this.trainability = this.DogTemplate.trainability;
    this.energy = this.DogTemplate.energy;

    console.log(this.DogTemplate);
    console.log(this.DogTemplate.name);
    console.log(this.min_height_female);
  }
  
}
