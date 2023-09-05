import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product.interface';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {
// arrayProducts:Product[]= [
//   {
//       id: 1,
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       price: 109.95,
//       description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       rating: {
//           rate: 3.9,
//           count: 120
//       },
//       quantity:1
//   },
//   {
//       id: 2,
//       title: "Mens Casual Premium Slim Fit T-Shirts ",
//       price: 22.3,
//       description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//       rating: {
//           rate: 4.1,        count: 259
//       },
//       quantity:1
//   },
//   {
//       id: 3,
//       title: "Mens Cotton Jacket",
//       price: 55.99,
//       description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//       category: "men's clothing",
//       image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//       rating: {
//           rate: 4.7,
//           count: 500
//       },
//       quantity:1
//   }
// ]
arrayProducts:Product[] = []
productsObs:BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.arrayProducts)
total = 0
totalObs:BehaviorSubject<number> = new BehaviorSubject<number>(this.total)

  constructor(
    private toastr: ToastrService
  ) { 
   
  }

  addToCart(product:Product):void{

    let foundIndex = this.arrayProducts.findIndex(e => e.id === product.id);
      if (foundIndex !== -1) {
        this.arrayProducts[foundIndex]['quantity'] += 1;
      } else {
        this.arrayProducts.push(product);
      }
      this.productsObs.next(this.arrayProducts)
      this.updateTotal()
      console.log(this.arrayProducts)
      this.toastr.success('added')
  }
  get productsInCart(){
    this.updateTotal()
    return this.productsObs.asObservable()
  }
  deleteFromCart(id:number){
      let newArray = this.arrayProducts.filter(e=> e.id !== id)
      this.arrayProducts = [...newArray]
      this.productsObs.next(this.arrayProducts)
      console.log(this.arrayProducts)
      this.updateTotal()
      this.toastr.error("Item Removed")

  }
  updateQuantity(id:number,amount:number){
    let index = this.arrayProducts.findIndex(e=> e.id === id)
    if(index !==-1){
      this.arrayProducts[index]['quantity'] = amount;
      this.productsObs.next(this.arrayProducts)
      console.log(this.arrayProducts)
      this.updateTotal()

    }
  }
   updateTotal (){
    this.total = this.arrayProducts.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    this.totalObs.next(this.total)
  console.log(this.total)

    
   }
}




