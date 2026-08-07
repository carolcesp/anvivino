import { Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PackOption } from '../../models/pack-customization.model';

@Component({
  selector: 'app-option-card',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div 
      (click)="optionSelected.emit(option())"
      class="option-card cursor-pointer rounded-2xl overflow-hidden border-2 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col h-full bg-surface-container"
      [class.selected]="isSelected()"
      [class.border-primary]="isSelected()"
      [class.border-transparent]="!isSelected()"
      [class.bg-surface-bright]="isSelected()">
      
      <div class="relative w-full aspect-square overflow-hidden bg-surface-container-high">
        <img 
          [ngSrc]="option().imageUrl" 
          fill
          class="object-cover transition-transform duration-500 hover:scale-105"
          [alt]="option().imageAlt">
        
        @if (isSelected()) {
          <div class="absolute top-3 right-3 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center shadow-md">
            <span class="material-symbols-outlined text-sm font-bold">check</span>
          </div>
        }
      </div>

      <div class="p-4 text-center flex-grow flex flex-col justify-center">
        <h4 class="font-label-sm text-label-sm text-on-surface font-semibold mb-1">{{ option().name }}</h4>
        @if (option().description) {
          <p class="text-xs text-on-surface-variant line-clamp-2">{{ option().description }}</p>
        }
      </div>
    </div>
  `,
  styles: [`
    .option-card.selected {
      border-color: #5c0430;
      box-shadow: 0 0 0 2px #5c0430;
    }
  `]
})
export class OptionCardComponent {
  option = input.required<PackOption>();
  isSelected = input<boolean>(false);
  optionSelected = output<PackOption>();
}
