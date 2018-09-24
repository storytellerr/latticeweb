import { Component, OnInit } from '@angular/core';
import {GetBloodService} from '../service/get-blood.service';
import {BloodModel} from '../BloodModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

Blood: BloodModel[];
type;
number;
AP = false;
AN = false;
BP = false;
BN = false;
OP = false;
ON = false;
ABP = false;
ABN = false;
  constructor(private getBlood: GetBloodService) {

  }

  ngOnInit() {
    this
      .getBlood
      .getData()
      .subscribe((data: BloodModel[]) => {
        this.Blood = data;
        console.log(data);
    });

}

bloodType(event: any) { // without type info
    this.type = event.target.value ;
    if (this.type === 'A+') {
      console.log('A+');
    this.AP = true;
    this.ON = true;
    this.OP = true;
    this.AN = true;
  }
  if (this.type === 'A-') {
      console.log('A-');
    this.AN = true;
    this.ON = true;
  }
  if (this.type === 'AB+') {
      console.log('AB+');
    this.ABP = true;
    this.ABN  = true;
    this.AN = true;
    this.AP = true;
    this.BN = true;
    this.BP = true;
    this.ON = true;
    this.OP = true;
  }
  if (this.type === 'AB-') {
      console.log('AB-');
    this.ON = true;
    this.AN = true;
    this.AP = true;
    this.BN = true;
  }
  if (this.type === 'B+') {
      console.log('B+');
    this.BN = true;
    this.BP = true;
    this.ON = true;
    this.OP = true;
  }
  if (this.type === 'B-') {
      console.log('B-');
    this.ON = true;
    this.BN = true;
  }
  if (this.type === 'O+') {
      console.log('O+');
    this.OP = true;
    this.ON = true;
  }
  if (this.type === 'O-') {
      console.log('O-');
    this.ON = true;
    }
  }
  bloodUnit(event: any) { // without type info
    this.number = event.target.value ;

  }

  dragable(data) {
    if (data.name == 'A+') {
       return this.AP;
    }
    if (data.name == 'A-') {
       return this.AN;
    }
    if (data.name == 'AB+') {
       return this.ABP;
    }
    if (data.name == "AB-"){
       return this.ABN;
    }
    if (data.name == "O+"){
       return this.OP;
    }
    if (data.name == 'O-') {
       return this.ON;
    }
    if (data.name == 'B+') {
       return this.BP;
    }
    if (data.name == 'B-') {
       return this.BN;
    }
    else {
      return false;
    }
  }


}