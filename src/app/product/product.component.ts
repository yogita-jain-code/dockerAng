import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product : any;
  constructor(private service : ProductService)
   { }

  ngOnInit()
   
  {
   let observableResult = this.service.Select();
   observableResult.subscribe((result)=>{
     console.log(result);
     this.product = result;
   })
  }

}
