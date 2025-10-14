import { Component, OnInit, signal } from '@angular/core';
import {ProductPage} from './components/product-page/product-page';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App implements OnInit{
    protected readonly title = signal('pwa-shopping-app-demo');

    ngOnInit(): void {
        // Service worker registration
        // if ('serviceWorker' in navigator) {
        // window.addEventListener('load', async () => {
        //     try {
        //     const registration = await navigator.serviceWorker.register('/sw.js', {
        //         scope: '/' // Service worker controls entire origin
        //     });
            
        //     console.log('SW registered successfully:', registration.scope);
            
        //     // Handle updates
        //     registration.addEventListener('updatefound', () => {
        //         const newWorker = registration.installing;
        //         newWorker?.addEventListener('statechange', () => {
        //             if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
        //                 // New version available
        //                 showUpdateNotification();
        //             }
        //             });
        //         });
            
        //         } catch (error) {
        //             console.error('SW registration failed:', error);
        //         }
        //     });
        // }

        // function showUpdateNotification() {
        //     // Notify user about app update
        //     if (confirm('New version available. Update now?')) {
        //         window.location.reload();
        //     }
        // }
    }
}
