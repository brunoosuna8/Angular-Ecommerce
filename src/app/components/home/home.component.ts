import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:Product[]
  constructor(
    private productService: ProductService
  ){}
  ngOnInit(): void {
    this.productService.products.subscribe((prods)=>{
      this.products = prods
      console.log(this.products)
    })
    
    
  }
}
