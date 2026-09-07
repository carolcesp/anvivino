import { Component, input, output } from '@angular/core';
import { PackOption } from '../../models/pack-customization.model';

@Component({
  selector: 'app-option-card',
  standalone: true,
  imports: [],
  template: `
<button
type="button"
(click)="optionSelected.emit(option())"
[attr.aria-pressed]="isSelected()"
class="group relative w-full overflow-hidden rounded-2xl border-2 bg-surface text-left transition-all duration-300 cursor-pointer hover:-translate-y-1 hover focus focus focus focus"
[class.border-primary]="isSelected()"
[class.border-outline-variant]="!isSelected()"
[class.ring-4]="isSelected()"
[class.ring-primary/20]="isSelected()">

  @if (option().image) {
    <div class="relative w-full aspect-[4/3] overflow-hidden bg-surface-variant">
      <img
        [src]="option().image?.url"
        [alt]="option().image?.alt"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy">

      @if (isSelected()) {
        <div
          class="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-lg font-bold text-on-primary shadow-lg">
          ✓
        </div>
      }
    </div>
  }

  <div class="p-4">
    <div class="flex items-start justify-between gap-3">
      <h3 class="font-headline-sm text-headline-sm text-on-surface">
        {{ option().name }}
      </h3>

      @if (isSelected() && !option().image) {
        <span
          class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-on-primary">
          ✓
        </span>
      }
    </div>

    @if (option().description) {
      <p class="mt-2 font-body-sm text-body-sm text-on-surface-variant">
        {{ option().description }}
      </p>
    }
  </div>

  @if (isSelected()) {
    <div class="absolute inset-0 pointer-events-none rounded-2xl border-2 border-primary"></div>
  }
</button>

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
