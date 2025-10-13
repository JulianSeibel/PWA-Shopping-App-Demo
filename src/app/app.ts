import { Component, signal } from '@angular/core';
import {AppModule} from './app.module';
import {ProductPage} from './components/product-page/product-page';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [AppModule, ProductPage, RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('pwa-shopping-app-demo');
}
