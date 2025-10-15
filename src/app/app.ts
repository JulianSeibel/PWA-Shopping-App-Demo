import { Component, OnInit, signal } from '@angular/core';
import {ProductPage} from './components/product-page/product-page';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('pwa-shopping-app-demo');
}
