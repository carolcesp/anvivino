import { Component, input, output } from '@angular/core';
import { CustomizationStep } from '../../models/pack-customization.model';

@Component({
  selector: 'app-step-tracker',
  standalone: true,
  template: `
    <div class="flex gap-2 w-full overflow-x-auto pb-4 hide-scrollbar">
      @for (step of steps(); track step.id) {
        <button 
          (click)="stepSelected.emit(step.id)"
          class="flex-1 py-3 px-4 rounded-full font-label-sm text-label-sm flex items-center justify-center gap-2 min-w-max transition-all cursor-pointer"
          [class]="currentStep() === step.id 
            ? 'bg-primary text-on-primary shadow-sm' 
            : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'">
          
          <span 
            class="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs transition-colors"
            [class]="currentStep() === step.id 
              ? 'bg-white text-primary' 
              : 'bg-surface-container-highest text-on-surface-variant'">
            {{ step.id }}
          </span>
          {{ step.label }}
        </button>
      }
    </div>
  `
})
export class StepTrackerComponent {
  steps = input.required<CustomizationStep[]>();
  currentStep = input.required<number>();
  stepSelected = output<number>();
}
