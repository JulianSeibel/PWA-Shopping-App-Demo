import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService {
    constructor(private readonly productService: ProductService) {}

    private http = inject(HttpClient);
    private baseUrl = 'https://fakestoreapi.com/products';

    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl);
    }
}
