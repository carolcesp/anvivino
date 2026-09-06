import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  template: `
    <section class="relative w-full h-[716px] min-h-[500px] flex items-start justify-center overflow-hidden pt-28">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          ngSrc="assets/images/portada.png" 
          fill
          priority
          class="object-cover object-center"
          alt="Fotografía editorial de cajas de regalo de vino envueltas elegantemente">
        
        <!-- Gradient Overlay for text readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="max-w-md flex flex-col items-start text-left gap-stack-lg">
          <span class="font-label-sm text-label-sm uppercase text-primary tracking-[0.2em]">Colecciones Exclusivas</span>
          
          <h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            El Arte de Regalar<br>Momentos
          </h1>
          
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Descubre nuestra selección de packs diseñados para impresionar. Cada bolsa es una experiencia sensorial cuidadosamente seleccionada para celebrar las ocasiones más especiales.
          </p>
          
          <a 
            routerLink="/pack"
            class="bg-primary text-on-primary px-8 py-4 rounded-full font-body-md font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 elevation-1 hover:elevation-2 active:scale-95 no-underline">
            Explorar y Personalizar Pack
          </a>

          <!-- Instagram/Tiktok Button -->
        <span class="font-semibold text-primary text-outline">Visitanos en Instagram y TikTok</span>
        <div class="flex flex-wrap gap-2">
          <a 
           href="https://www.instagram.com/anvi.vino?stkn=MXFvcWU4NDV6eWRrbg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer">
          <img 
            src="assets/images/icon-insta-2.jpg" 
            alt="AnviVino - El Arte de Regalar" 
            class="h-12 w-auto object-contain">
        </a>
         <a 
           href="https://www.tiktok.com/@anvivino?_r=1&_t=ZN-99VqTGNM4rm"
            target="_blank"
            rel="noopener noreferrer">
          <img 
            src="assets/images/icon-tiktok.jpg" 
            alt="AnviVino - El Arte de Regalar" 
            class="h-12 w-auto object-contain">
        </a>
        </div>    
        </div>
      </div>
    </section>
  `
})
export class HeroComponent { }
