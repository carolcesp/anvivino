import { Component, input, output } from '@angular/core';
import { PackOption } from '../../models/pack-customization.model';

@Component({
  selector: 'app-option-card',
  standalone: true,
  imports: [],
  template: `
    <div 
      (click)="optionSelected.emit(option())"
      class="option-card cursor-pointer rounded-2xl border-2 transition-all hover:-translate-y-1 hover:shadow-lg flex items-center justify-between p-4 h-full bg-surface-container"
      [class.selected]="isSelected()"
      [class.border-primary]="isSelected()"
      [class.border-transparent]="!isSelected()"
      [class.bg-surface-bright]="isSelected()">
      
      <div class="flex-grow text-left">
        <h4 class="font-label-sm text-label-sm text-on-surface font-semibold mb-1">{{ option().name }}</h4>
        @if (option().description) {
          <p class="text-xs text-on-surface-variant">{{ option().description }}</p>
        }
      </div>
      
      <div class="w-8 h-8 flex-shrink-0 ml-4">
        @if (isSelected()) {
          <div class="bg-primary text-on-primary w-full h-full rounded-full flex items-center justify-center shadow-md">
            <span class="material-symbols-outlined text-sm font-bold">check</span>
          </div>
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
