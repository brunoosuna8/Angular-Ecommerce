import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartProducts:Product[]
  total:number
constructor(
  private cartService:CartService
){}
  ngOnInit(): void {
    this.cartService.productsInCart.subscribe(prods=> this.cartProducts = prods)
    this.cartService.totalObs.subscribe(sum => this.total = sum)
    console.log(this.cartProducts)
    console.log(this.total)

  }
  

}
