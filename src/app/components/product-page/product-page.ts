import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product-service';
import {ButtonModule} from 'primeng/button'

@Component({
    selector: 'app-product-page',
    imports: [CurrencyPipe, CommonModule, ButtonModule],
    providers: [ProductService],
    templateUrl: './product-page.html',
    styleUrl: './product-page.css'
})
// export class ProductPage implements OnInit, AfterViewInit {
export class ProductPage implements OnInit {

    constructor(private productService: ProductService) {}

    products: Product[] = [];

    ngOnInit() {
        this.fetchProducts();
    }

    // ngAfterViewInit(): void {
    //     setTimeout(() => {
    //         alert('Nachricht von seb')
    //      }, 5000);
    // }

    public fetchProducts() {
        this.productService.getProducts().subscribe((data) => {
            this.products = data;
        });
    }
}
