import { Component, OnInit } from '@angular/core';
import {Car} from '../car'
import {CommonService} from '../common.service'
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
myCar:Car=new Car();
// myCars:any=[]
count=1;
  wow="My cars";
  myCars:any= []
myName
  constructor(private commonService:CommonService ) { }

  ngOnInit(): void {
this.myName=this.commonService.myName;
this.commonService.getCarsList().subscribe(res=>{
this.myCars=res;
})

  }
  deleteCar(data){
    console.log(data)
    const index=this.myCars.indexOf(data);
    this.myCars.splice(index,1)

    this.commonService.deletCarData(data)

}
addCar(){
//   let temp={Sl:6,Name:"BMW",Price:3456789}
// this.cars.push(temp)
// this.myCar.id=this.count++;
this.commonService.addData(this.myCar)
this.myCar=new Car();
}
}
