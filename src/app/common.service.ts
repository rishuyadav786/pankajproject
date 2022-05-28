import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { interval, Observable, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
myName="Rishu"
// private productUrl = 'http://localhost:3000/cars/';
productUrl="https://jsonplaceholder.typicode.com/posts"
myCars:any= [{sl:1,name:"Mercedes",price:10000000},
{sl:2,name:"Suzuki",price:3434300000},
{sl:3,name:"Merhgh",price:176760000},
{sl:4,name:"jjjucedes",price:10000000},
{sl:5,name:"ccccrcedes",price:909990000}]
  constructor(private http: HttpClient,) { }


  getCarsList(): Observable<any[]> {
      return  this.http.get<any[]>(this.productUrl);
}


addData(order: any) {
  console.log(order);
  this.http.post(this.productUrl, order).subscribe();
 
}
deletCarData(data){
this.http.delete(this.productUrl+data.id).subscribe();
}

updateData(data: any) {
  console.log(data);
  this.http.put(this.productUrl + data.id, data).subscribe();
}
}
