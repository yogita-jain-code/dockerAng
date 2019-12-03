import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient)
   { }

   Select()
   {
     return this.http.get("http://172.18.5.193:9999/product");
   }
}
