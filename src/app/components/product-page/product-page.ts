import {Component, OnInit} from '@angular/core';
import {AppModule} from '../../app.module';
import {CurrencyPipe} from '@angular/common';
import {Product} from '../../models/product';
import {NgFor} from '@angular/common';
import {ProductService} from '../../services/product-service';

@Component({
    selector: 'app-product-page',
    imports: [AppModule, CurrencyPipe],
    templateUrl: './product-page.html',
    styleUrl: './product-page.css'
})
export class ProductPage implements OnInit {

    private productService = ProductService;

    products: Product[] = [];

    ngOnInit() {
        this.products = this.productService.getProducts();
    }
}
