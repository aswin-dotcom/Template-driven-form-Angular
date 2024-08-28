import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent implements OnInit {
 

  Details: details= new details();
  constructor() {}
  ngOnInit() {
    this.Details.firstname = "aswin";
    this.Details.LastName = "samuvel";
    this.Details.gender = 'male';
    this.Details.country = 'INDIA';
    this.Details.Married = true;
    this.Details.address = 'KPM';
    this.Details.pincode = '638183';
  }
  countrynames: Country[] = [
    new Country('INDIA', 1),
    new Country('USA', 2),
    new Country('Russia', 3),
    new Country('China', 4),
  ];
  handlesubmit(form: NgForm) {
    console.log(form);
  }
}
class Country {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
class details {
  firstname!: string;
  LastName!: string;
  gender!: string;
  country!: string;
  Married!: boolean;
  address!: string;
  pincode!: string;
}
