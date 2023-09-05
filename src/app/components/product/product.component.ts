import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()product:Product
  count:number
  constructor(
    private router:Router,
    private cartService:CartService
    ){
    
  }
  goToPurchase(){
    this.router.navigate(['/purchase', this.product.id]);
  }
  onAddToCart(event:Event){
  this.cartService.addToCart(this.product)
  event.stopPropagation()
  }
}
