import { Component,Input,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/Product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit{
  @Input() cartProduct:Product
  quantity:number
  subTotalProduct: number
  constructor(
    private cartService:CartService,
    private toastr: ToastrService
  ){}
  ngOnInit(): void {
    this.quantity= this.cartProduct.quantity
    this.subTotalProduct = this.cartProduct.price * this.quantity
  }
  onDeleteFromCart(){
    console.log(this.cartProduct)
    this.cartService.deleteFromCart(this.cartProduct.id)
    // this.toastr.info("Item Removed","item Removed")
  }
  onQuantityChange() {
    
    this.subTotalProduct = this.cartProduct.price * this.quantity;
    this.cartService.updateQuantity(this.cartProduct.id,this.quantity)
    console.log(this.quantity)
  }

}
