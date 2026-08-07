import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bottom-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed bottom-0 left-0 w-full flex justify-around items-center py-4 px-6 md:hidden bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-t border-outline-variant/20 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] rounded-t-lg z-50">
      <!-- Discover (Home) -->
      <a 
        routerLink="/" 
        routerLinkActive="text-primary dark:text-primary-fixed-dim font-bold"
        [routerLinkActiveOptions]="{exact: true}"
        class="flex flex-col items-center justify-center text-on-surface-variant/60 dark:text-on-tertiary-container/60 hover:text-primary active:scale-90 transition-all duration-200 no-underline">
        <span class="material-symbols-outlined filled mb-1">explore</span>
        <span class="font-label-sm text-label-sm">Descubrir</span>
      </a>

      <!-- Pack Customizer -->
      <a 
        routerLink="/pack" 
        routerLinkActive="text-primary dark:text-primary-fixed-dim font-bold"
        class="flex flex-col items-center justify-center text-on-surface-variant/60 dark:text-on-tertiary-container/60 hover:text-primary active:scale-90 transition-all duration-200 no-underline">
        <span class="material-symbols-outlined mb-1">wine_bar</span>
        <span class="font-label-sm text-label-sm">Personalizar</span>
      </a>

      <!-- Profile -->
      <a class="flex flex-col items-center justify-center text-on-surface-variant/60 dark:text-on-tertiary-container/60 hover:text-primary transition-colors active:scale-90 transition-transform duration-200 no-underline" href="#">
        <span class="material-symbols-outlined mb-1">person</span>
        <span class="font-label-sm text-label-sm">Perfil</span>
      </a>
    </nav>
  `
})
export class BottomNavBarComponent {}
