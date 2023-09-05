import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/Product.interface';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchaseId:any
  product:Product
  quantity:number
constructor(
  private route:ActivatedRoute,
  private productService:ProductService,
  private cartService:CartService,
  private toastr:ToastrService
  ){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.purchaseId = params.get('id');
      let idNum = parseInt(this.purchaseId)
      console.log(idNum)
      this.product = this.productService.getSingleProduct(idNum)
    this.quantity= this.product.quantity

      console.log(this.product.image)
      
    });

  }

  onAddToCart(){
    console.log(typeof this.quantity, this.quantity)
    console.log(typeof this.product, this.product)
    this.cartService.addToCart(this.product)
    this.cartService.updateQuantity(this.product.id,this.quantity)
    
  }
}
