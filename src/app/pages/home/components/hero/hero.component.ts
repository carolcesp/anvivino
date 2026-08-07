import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  template: `
    <section class="relative w-full h-[716px] min-h-[500px] flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          ngSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCpUBMR0FLwIFcyd25TpEYXC0xLXYwgJX2FA9OnSW0epEnbYFDbjJAG6M9aO38ptuna7V2PjWDn_BvNtug0xnKMbO-jM0bieqQDlk_I-b2k8dD1wbEjGGkKSgUGVAg6KOwPEX3mGdcDn-hFFiT3OwsvuDzig9jsYH8eMCCkdRuee1Nmwo2VB4bzYmLTPQxXsbh8VyJ6zS6GE4QXWAEFKbhbgRAB44S_6lTRTbWnrpKaFEcRSUVLFsaBYg" 
          fill
          priority
          class="object-cover object-center"
          alt="Fotografía editorial de cajas de regalo de vino envueltas elegantemente">
        
        <!-- Gradient Overlay for text readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center px-margin-mobile flex flex-col items-center gap-stack-lg max-w-2xl mx-auto mt-20">
        <span class="font-label-sm text-label-sm uppercase text-primary tracking-[0.2em]">Colecciones Exclusivas</span>
        
        <h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
          El Arte de Regalar Momentos
        </h1>
        
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Descubre nuestra selección de packs diseñados para impresionar. Cada caja es una experiencia sensorial cuidadosamente curada para celebrar las ocasiones más especiales.
        </p>
        
        <a 
          routerLink="/pack"
          class="bg-primary text-on-primary px-8 py-4 rounded-full font-body-md font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 elevation-1 hover:elevation-2 active:scale-95 no-underline">
          Explorar y Personalizar Pack
        </a>
      </div>
    </section>
  `
})
export class HeroComponent {}
