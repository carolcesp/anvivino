import { Component, input, output, signal, computed } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Pack {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  occasion: string;
  occasionColorClass: string;
}

@Component({
  selector: 'app-pack-card',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  host: {
    'class': 'block'
  },
  template: `
    <article class="group bg-surface-container-lowest rounded-DEFAULT overflow-hidden elevation-1 hover:elevation-2 transition-all duration-500 border border-outline-variant/30 h-full flex flex-col">
      <div class="relative h-[400px] w-full overflow-hidden shrink-0">
        <img 
          [ngSrc]="pack().imageUrl"
          fill
          class="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
          [alt]="pack().imageAlt">
        
        <!-- Occasion Badge -->
        <div class="absolute top-6 left-6 bg-surface/90 backdrop-blur-md px-4 py-1.5 rounded-full z-10">
          <span class="font-label-sm text-label-sm uppercase" [class]="pack().occasionColorClass">
            {{ pack().occasion }}
          </span>
        </div>

        <!-- Favorite Button -->
        <button 
          (click)="toggleFavorite()"
          class="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface/50 backdrop-blur-md flex items-center justify-center transition-all duration-150 z-10"
          [class.text-error]="isFavorite()"
          [class.text-on-surface-variant]="!isFavorite()"
          [class.hover:text-primary]="!isFavorite()"
          [style.transform]="buttonScale()">
          
          <span class="material-symbols-outlined" [class.filled]="isFavorite()">favorite</span>
        </button>
      </div>

      <div class="p-8 flex flex-col flex-grow">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="font-headline-md text-headline-md text-on-surface mb-1">{{ pack().name }}</h3>
          </div>
        </div>
        
        <p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
          {{ pack().description }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mt-auto">
          <a 
            routerLink="/pack"
            class="flex-1 bg-primary text-on-primary py-3 px-6 rounded-full font-body-md font-semibold hover:bg-primary-container transition-colors active:scale-95 text-center no-underline">
            Personalizar Pack
          </a>
        </div>
      </div>
    </article>
  `
})
export class PackCardComponent {
  pack = input.required<Pack>();
  favoriteToggled = output<string>();

  isFavorite = signal(false);
  isAnimating = signal(false);

  buttonScale = computed(() => this.isAnimating() ? 'scale(1.2)' : 'scale(1)');

  toggleFavorite() {
    this.isFavorite.update(v => !v);
    this.favoriteToggled.emit(this.pack().id);

    // Trigger animation
    this.isAnimating.set(true);
    setTimeout(() => {
      this.isAnimating.set(false);
    }, 150);
  }
}
