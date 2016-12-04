import { Observable } from 'rxjs/Observable';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Product } from './../models/product';

@Injectable()
export class ProductService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private productsUrl = 'app/products';

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.productsUrl)
               .map(response => response.json().data as Product[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}