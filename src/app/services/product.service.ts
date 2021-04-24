import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product} from '../models/product';
import { Observable} from 'rxjs';
import { AngularFirestore} from '@angular/fire/firestore';

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // populate products from an API
  products: Product[] = [
    new Product(1, 'Product 1', 'product description', 100),
    new Product(2, 'Product 2', 'product description', 150),
    new Product(3, 'Product 3', 'product description', 200),
    new Product(4, 'Product 4', 'product description', 100),
    new Product(5, 'Product 5', 'product description', 213),
    new Product(6, 'Product 6', 'product description', 431),
    new Product(7, 'Product 7', 'product description', 644),
    new Product(8, 'Product 8', 'product description', 231),

  ];
  constructor(private http: HttpClient, private afs: AngularFirestore) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(apiUrl);
  }
}
