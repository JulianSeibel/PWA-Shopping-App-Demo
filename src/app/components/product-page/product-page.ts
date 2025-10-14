import {Component, OnInit} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product-service';

@Component({
    selector: 'app-product-page',
    imports: [CurrencyPipe, CommonModule],
    providers: [ProductService],
    templateUrl: './product-page.html',
    styleUrl: './product-page.css'
})
export class ProductPage implements OnInit {

    constructor(private productService: ProductService) {}

    products: Product[] = [];

    ngOnInit() {
        this.productService.getProducts().subscribe((data) => {
            this.products = data;
        });
    }
}
