import { Routes } from '@angular/router';
import {ProductPage} from './components/product-page/product-page';
import {CartPage} from './components/cart-page/cart-page';

export const routes: Routes = [
    {
        path: '',
        component: ProductPage,
        title: 'Products',
    },
    {
        path: 'cart',
        component: CartPage,
        title: 'Cart',
    }
];
