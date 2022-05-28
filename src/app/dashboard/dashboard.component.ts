import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private commonService:CommonService) { }
myName1
myCars:any= []
  ngOnInit(): void {
    this.myName1=this.commonService.myName;
this.commonService.getCarsList().subscribe(res=>{
this.myCars=res;
})
  }

}
