import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category.interface';
import { Product } from 'src/app/interfaces/Product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  products:Product[]
  inputFilter: string
  categoriesMarked:Category[]
constructor(
  private productService: ProductService
){}
  ngOnInit(): void {
    this.productService.products.subscribe(prods=> this.products = prods)
    console.log('prods in filter',this.products)
  }
  onFilter(filter:string,inputFilter?:string | undefined,category?:string){
    console.log(filter,inputFilter,category)
    this.productService.filterProducts(filter,inputFilter,category)
  }
}
