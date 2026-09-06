import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CustomizationStep, PackOption, PackSelectionState } from './models/pack-customization.model';
import { StepTrackerComponent } from './components/step-tracker/step-tracker.component';
import { OptionCardComponent } from './components/option-card/option-card.component';
import { PackSummaryComponent } from './components/pack-summary/pack-summary.component';
import { PACK_STEPS_CONFIG } from './config/pack-customization.config';

@Component({
  selector: 'app-pack-customize',
  standalone: true,
  imports: [StepTrackerComponent, OptionCardComponent, PackSummaryComponent],
  template: `
    <main class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-8 relative py-8">
      <!-- Interactive Steps Area (Left Column) -->
      <div class="lg:col-span-8 flex flex-col gap-8">
        <div class="flex flex-col gap-3">
          <h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
            Personaliza tu Pack
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Crea el regalo perfecto paso a paso. Selecciona cada detalle para una experiencia única.
          </p>
        </div>

        <!-- Progress Tracker -->
        <app-step-tracker 
          [steps]="steps"
          [currentStep]="currentStepId()"
          (stepSelected)="goToStep($event)">
        </app-step-tracker>

        <!-- Current Step Content -->
        <div class="relative min-h-[500px] flex flex-col justify-between bg-surface/50 rounded-3xl p-6 border border-outline-variant/20">
          <div>
            <h2 class="font-headline-md text-headline-md text-on-surface mb-6">
              {{ currentStep().title }}
            </h2>

            <!-- Step Images -->
            @if (currentStep().images.length > 0) {
              <div class="grid grid-cols-1 gap-4 mb-8" 
                   [class.sm:grid-cols-2]="currentStep().images.length === 2"
                   [class.sm:grid-cols-3]="currentStep().images.length >= 3">
                @for (image of currentStep().images; track image.url) {
                  <div class="relative w-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                    <img 
                      [src]="image.url" 
                      [alt]="image.alt"
                      class="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      loading="lazy">
                  </div>
                }
              </div>
            }

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              @for (option of currentStep().options; track option.id) {
                <app-option-card 
                  [option]="option"
                  [isSelected]="isOptionSelected(option)"
                  (optionSelected)="selectOption(option)">
                </app-option-card>
              }
            </div>
          </div>

          <!-- Step Actions -->
          <div class="mt-8 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
            <button 
              (click)="prevStep()"
              [disabled]="currentStepId() === 1"
              class="px-8 py-4 border border-outline text-on-surface rounded-full font-label-sm text-label-sm hover:bg-surface-variant transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
              Atrás
            </button>

            <button 
              (click)="handleNextOrFinish()"
              [disabled]="currentStepId() === steps.length && !hasAnySelection()"
              class="px-8 py-4 bg-primary text-on-primary rounded-full font-label-sm text-label-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
              {{ currentStepId() === steps.length ? 'Finalizar por WhatsApp' : 'Continuar' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Dynamic Preview & Summary Sticky Panel (Right Column) -->
      <div class="lg:col-span-4 relative">
        <app-pack-summary [selection]="selection()"></app-pack-summary>
      </div>
    </main>
  `
})
export class PackCustomizeComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  currentStepId = signal<number>(1);
  selection = signal<PackSelectionState>({
    bolsa: [],
    vino: [],
    chocolates: [],
    copas: [],
    extras: []
  });

  steps: CustomizationStep[] = PACK_STEPS_CONFIG;

  currentStep = computed(() => {
    return this.steps.find(s => s.id === this.currentStepId()) || this.steps[0];
  });

  hasAnySelection = computed(() => {
    const s = this.selection();
    return Object.values(s).some(arr => arr.length > 0);
  });

  whatsAppUrl = computed(() => {
    const s = this.selection();

    const formatCategory = (items: any[]) => {
      return items.length > 0
        ? items.map(item => `${item.name}${item.description ? ` (${item.description})` : ''}`).join(', ')
        : 'Por definir';
    };

    const lines: string[] = [
      '🍷 ¡Hola! Me gustaría encargar un pack personalizado AnviVino:',
      '',
      `📦 *Bolsas:* ${formatCategory(s.bolsa)}`,
      `🍾 *Vinos:* ${formatCategory(s.vino)}`,
      `🍫 *Chocolates:* ${formatCategory(s.chocolates)}`,
      `🥂 *Copas:* ${formatCategory(s.copas)}`,
      `✨ *Extras:* ${formatCategory(s.extras)}`,
      '',
      '¿Podrían indicarme disponibilidad, precio final y opciones de envío? ¡Gracias!'
    ];
    const message = encodeURIComponent(lines.join('\n'));
    return `https://api.whatsapp.com/send?phone=34631646413&text=${message}`;
  });

  ngOnInit() {
    this.title.setTitle('AnviVino - Personaliza tu Pack');
    this.meta.updateTag({ name: 'description', content: 'Crea un pack de vino personalizado para tu ocasión especial.' });
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }

  private scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToStep(stepId: number) {
    this.currentStepId.set(stepId);
    this.scrollToTop();
  }

  nextStep() {
    if (this.currentStepId() < this.steps.length) {
      this.currentStepId.update(v => v + 1);
      this.scrollToTop();
    }
  }

  handleNextOrFinish() {
    if (this.currentStepId() === this.steps.length) {
      if (this.hasAnySelection()) {
        window.open(this.whatsAppUrl(), '_blank');
      }
    } else {
      this.nextStep();
    }
  }

  prevStep() {
    if (this.currentStepId() > 1) {
      this.currentStepId.update(v => v - 1);
      this.scrollToTop();
    }
  }

  isOptionSelected(option: PackOption): boolean {
    const key = option.category;
    return this.selection()[key].some(o => o.id === option.id);
  }

  selectOption(option: PackOption) {
    const key = option.category;
    this.selection.update(state => {
      const currentList = state[key];
      const isSelected = currentList.some(o => o.id === option.id);

      return {
        ...state,
        [key]: isSelected
          ? currentList.filter(o => o.id !== option.id)
          : [...currentList, option]
      };
    });
  }
}
