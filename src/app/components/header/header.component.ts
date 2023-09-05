import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../app.component.css']
})
export class HeaderComponent implements OnInit{
  count:number
constructor(
  private cartService:CartService
){}
ngOnInit(): void {
  this.cartService.productsInCart.subscribe((products)=>{
    this.count = products.length
    console.log(this.count)
  })

  
}

onClick(){
  const menuElement = document.querySelector('.menu') as HTMLElement;
  if (menuElement) {
    if(menuElement.style.visibility === 'visible' ){
      menuElement.style.visibility = 'hidden'
    }else{
      menuElement.style.visibility = 'visible'
    }
    
}
}
}
