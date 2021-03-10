import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductResponseModel } from 'src/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
  products:Product[]=[];
  dataLoaded = false;
  


  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })
    
    
  }

}
