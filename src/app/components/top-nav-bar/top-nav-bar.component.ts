import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav 
      class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm transition-all duration-300" 
      [class.-translate-y-full]="isHidden()"
      [class.translate-y-0]="!isHidden()">
      <div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 w-full max-w-container-max mx-auto">
        <!-- Brand -->
        <a 
          routerLink="/" 
          class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed tracking-tight hover:opacity-70 transition-opacity duration-300 cursor-pointer active:scale-95 no-underline flex items-center">
          <img 
            src="assets/images/logo-anvivino.jpg" 
            alt="AnviVino - El Arte de Regalar" 
            class="h-12 w-auto object-contain">
            AnviVino
        </a>

        <!-- Desktop Navigation Links (Hidden on Mobile) -->
        <div class="hidden md:flex gap-8 items-center">
          <a 
            routerLink="/" 
            routerLinkActive="font-bold text-primary" 
            [routerLinkActiveOptions]="{exact: true}"
            class="text-on-surface-variant dark:text-on-tertiary-container hover:opacity-70 transition-opacity duration-300 cursor-pointer active:scale-95 no-underline">
            Descubrir
          </a>
          <a 
            routerLink="/pack" 
            routerLinkActive="font-bold text-primary" 
            class="text-on-surface-variant dark:text-on-tertiary-container hover:opacity-70 transition-opacity duration-300 cursor-pointer active:scale-95 no-underline">
            Personalizar Pack
          </a>
        </div>

        <!-- Trailing Icons -->
        <!-- <div class="flex gap-4">
        //   <button class="text-primary dark:text-primary-fixed hover:opacity-70 transition-opacity duration-300 cursor-pointer active:scale-95">
        //     <span class="material-symbols-outlined">search</span>
        //   </button>
        //   <button class="text-primary dark:text-primary-fixed hover:opacity-70 transition-opacity duration-300 cursor-pointer active:scale-95">
        //     <span class="material-symbols-outlined">account_circle</span>
        //   </button>
        // </div>
        -->
      </div>
    </nav>
  `
})
export class TopNavBarComponent {
  lastScrollTop = 0;
  isHidden = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop && scrollTop > 100) {
      this.isHidden.set(true);
    } else {
      this.isHidden.set(false);
    }
    this.lastScrollTop = scrollTop;
  }
}
