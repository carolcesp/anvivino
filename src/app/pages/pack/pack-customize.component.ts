import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CustomizationStep, PackOption, PackSelectionState } from './models/pack-customization.model';
import { StepTrackerComponent } from './components/step-tracker/step-tracker.component';
import { OptionCardComponent } from './components/option-card/option-card.component';
import { PackSummaryComponent } from './components/pack-summary/pack-summary.component';

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
            Crea el regalo perfecto paso a paso. Selecciona cada detalle para una experiencia enológica única.
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

            <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
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
              (click)="nextStep()"
              [disabled]="currentStepId() === steps.length"
              class="px-8 py-4 bg-primary text-on-primary rounded-full font-label-sm text-label-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
              Continuar
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
    bolsa: null,
    vino: null,
    chocolates: null,
    copas: null,
    extras: null
  });

  steps: CustomizationStep[] = [
    {
      id: 1,
      key: 'bolsa',
      label: '1. Bolsa',
      title: 'Elige el estilo de presentación',
      options: [
        {
          id: 'b-1',
          name: 'Bolsa Negra',
          category: 'bolsa',
          description: 'Mate premium elegante',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDIOwKCRG3BJgr-v-wSYrSxvgWhxNI5Ds0n-bVJSMvdTtuLeEon8jKRpuXz5dsry8tDYuNrWZaOK2PmDgN3PCVpFzio2ITgKDfH6yiWmnKnoxv8Jx8XGM-SgvG-0NZ0o1V2UIxJ4Fr2mrP48q0suSu7EleLbeFwThfNHLUVxMKjCKke288oKdvCq5sV3tVA7GxD2KUcMZOdBNJIVeu5Thmq1gt9SDyfCgpwXlAmaJEKDbvWQmoEk7sww',
          imageAlt: 'Bolsa de regalo negra mate'
        },
        {
          id: 'b-2',
          name: 'Bolsa Kraft',
          category: 'bolsa',
          description: 'Papel artesanal orgánico',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIlIevL_i5Gp6RX-9fKodfDd17p-fS12pnydEsAmlaFFDk3M01JuBwJ9oZ-RT0CJkkeg9IIv-4LswiT4b3VGxyhQ2jCvo2YC8gY0RHKUk0jk0nbAIXLaT9YBM70_DVyDhNr7_ilkCl9f8lJRfjLiJH-igEG0yBYzjUel41k0gG2Smtd5rJwg6BRQY5otFIXnbLANxfAu_orsf_raezJ6WPG-OWLVb6LHtnOT1NQFTds9VN_3Cb2Zv7Sw',
          imageAlt: 'Bolsa de regalo kraft'
        },
        {
          id: 'b-3',
          name: 'Bolsa Burdeos',
          category: 'bolsa',
          description: 'Color vino satinado',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOjwHqoeov1EalC3Vc2mP3_pu8qC-vhrz9NnpbabyDM4UIgbRx7qNLx02EV3ym_SHQBK0xmU7CF57ZxukH0nC-iCGgDd1-PpG7lgFKuh8eIeXJfmwDRP7cgo3r8t4GhMDrAEnavmwSmmlPO_FaMsOgClFP-KUXhvZH4az4-PbixHGGciLrcak2RdB9H-r-nedUQry3rk9OPOf6XMdo-_Tw88o96O9agZp6_9NfaHuYpimo6ZahiKlKwQ',
          imageAlt: 'Bolsa de regalo borgoña'
        }
      ]
    },
    {
      id: 2,
      key: 'vino',
      label: '2. Vino',
      title: 'Selecciona el vino protagonista',
      options: [
        {
          id: 'v-1',
          name: 'Tinto Reserva',
          category: 'vino',
          description: 'Notas profundas y elegantes',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAueSre43iddFzpM3vIxLDBBGODdh08c8QQOqowWqvoEdJmWvrYmzY-Zh24KcKT_KRUgLvWkZ1_PQqOkV1vRtpzIuP8WosOKovHeKE6VHH9OOzdsXY9RP_67OH2MStWa-ARnq2m8ySmRBGPjsT6lNGVAkY8bgmcOlbee7FJsMMMK3HMYEtj0t38ilNSytRWhMWr1m2EVtA6mDN4fc8sIayHICLask8PQTQwW-hpeTzIZ-vnnFXBoAXSyg',
          imageAlt: 'Botella de vino tinto reserva'
        },
        {
          id: 'v-2',
          name: 'Blanco Fresco',
          category: 'vino',
          description: 'Aromas cítricos y florales',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPxuQ_WV6z9Z0-5fua7YKusVcRQR5VTzmC1JahTSa2Qd7MELYLWjSKUdi8j6Sx98On5cVsC5XNN3nXTdkYkOKW02t4-Cf0SgKqV3n5KSzt9j9kAF4DqHYijW6Gy5mspxXXafz91xtY-zq84pyXffMR474bNWBTXORoR_TmCgGzIhVD7e0kcAGcolk2J4sNwfjdMGH7WzbB3RHq7mT3czMOQ4OgI76XbzU5437Q4nEYU0gnkETEUSqwGA',
          imageAlt: 'Botella de vino blanco fresco'
        },
        {
          id: 'v-3',
          name: 'Rosado Selección',
          category: 'vino',
          description: 'Frutado y refrescante',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKNR_mOX38D4ECi3tiiiB8AqC-V6ViO-AfEMecnRNcewNLk7dM36_uDq_67IyDzybHwYzTMPwD5kZoN1z-iqkASd9aeKs5DccL57E4kRY2TXjD4At7lac0TWbmiHy9rDNeejO-CV6GxxrH4VXDKLbiLkCJ_fkZaBsMFAJ5v9oZE-SIyJvUNV1tsIbFexMv347Qg2P_haaJVItuVTY3CY_ctts_R_fisUhxi9RggC5wXN8nJi3q1qHRPQ',
          imageAlt: 'Botella de vino rosado'
        }
      ]
    },
    {
      id: 3,
      key: 'chocolates',
      label: '3. Chocolates',
      title: 'Elige los chocolates de maridaje',
      options: [
        {
          id: 'c-1',
          name: 'Trufas de Chocolate Negro',
          category: 'chocolates',
          description: 'Cacao 70% cacao puro',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHV3GcxF5jka1Yrgar_nTzXC0iwTxdERo9J2-zu8qL2hfLKpiPcZ1pbfuBdzWXF5dWK4fbLD7DEelHEz2KOk_cEjXdjRehzml6sn3UPP44DIFb0iMNEd6l5geUghmREi0ozWkvn6FGAkXmEAUAfybJ2rEMY2iS1Ls91xU1awKVgQWKPA3iRJ3I6D_jfdEgzLJKcbONmMMbGZ9xFM7OKPk994HbZ3iKv0oxzFk3VI2vBsNxuTqR5VVH2Q',
          imageAlt: 'Trufas de chocolate negro'
        },
        {
          id: 'c-2',
          name: 'Bombones Belgas',
          category: 'chocolates',
          description: 'Selección surtida de praliné',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpUBMR0FLwIFcyd25TpEYXC0xLXYwgJX2FA9OnSW0epEnbYFDbjJAG6M9aO38ptuna7V2PjWDn_BvNtug0xnKMbO-jM0bieqQDlk_I-b2k8dD1wbEjGGkKSgUGVAg6KOwPEX3mGdcDn-hFFiT3OwsvuDzig9jsYH8eMCCkdRuee1Nmwo2VB4bzYmLTPQxXsbh8VyJ6zS6GE4QXWAEFKbhbgRAB44S_6lTRTbWnrpKaFEcRSUVLFsaBYg',
          imageAlt: 'Caja de bombones belgas'
        }
      ]
    },
    {
      id: 4,
      key: 'copas',
      label: '4. Copas',
      title: 'Añade el cristal perfecto',
      options: [
        {
          id: 'cp-1',
          name: 'Set 2 Copas Riedel',
          category: 'copas',
          description: 'Cristal fino tallado',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHV3GcxF5jka1Yrgar_nTzXC0iwTxdERo9J2-zu8qL2hfLKpiPcZ1pbfuBdzWXF5dWK4fbLD7DEelHEz2KOk_cEjXdjRehzml6sn3UPP44DIFb0iMNEd6l5geUghmREi0ozWkvn6FGAkXmEAUAfybJ2rEMY2iS1Ls91xU1awKVgQWKPA3iRJ3I6D_jfdEgzLJKcbONmMMbGZ9xFM7OKPk994HbZ3iKv0oxzFk3VI2vBsNxuTqR5VVH2Q',
          imageAlt: 'Set de 2 copas de cristal'
        },
        {
          id: 'cp-2',
          name: 'Sin Copas',
          category: 'copas',
          description: 'Solo el pack de vino y extras',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDIOwKCRG3BJgr-v-wSYrSxvgWhxNI5Ds0n-bVJSMvdTtuLeEon8jKRpuXz5dsry8tDYuNrWZaOK2PmDgN3PCVpFzio2ITgKDfH6yiWmnKnoxv8Jx8XGM-SgvG-0NZ0o1V2UIxJ4Fr2mrP48q0suSu7EleLbeFwThfNHLUVxMKjCKke288oKdvCq5sV3tVA7GxD2KUcMZOdBNJIVeu5Thmq1gt9SDyfCgpwXlAmaJEKDbvWQmoEk7sww',
          imageAlt: 'Sin copas suplementarias'
        }
      ]
    },
    {
      id: 5,
      key: 'extras',
      label: '5. Extras',
      title: 'Detalles especiales finales',
      options: [
        {
          id: 'e-1',
          name: 'Tarjeta Dedicatoria',
          category: 'extras',
          description: 'Impresa en papel de hilo',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIlIevL_i5Gp6RX-9fKodfDd17p-fS12pnydEsAmlaFFDk3M01JuBwJ9oZ-RT0CJkkeg9IIv-4LswiT4b3VGxyhQ2jCvo2YC8gY0RHKUk0jk0nbAIXLaT9YBM70_DVyDhNr7_ilkCl9f8lJRfjLiJH-igEG0yBYzjUel41k0gG2Smtd5rJwg6BRQY5otFIXnbLANxfAu_orsf_raezJ6WPG-OWLVb6LHtnOT1NQFTds9VN_3Cb2Zv7Sw',
          imageAlt: 'Tarjeta dedicatoria personalizada'
        },
        {
          id: 'e-2',
          name: 'Sacacorchos Sommelier',
          category: 'extras',
          description: 'Abridor profesional de acero',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDIOwKCRG3BJgr-v-wSYrSxvgWhxNI5Ds0n-bVJSMvdTtuLeEon8jKRpuXz5dsry8tDYuNrWZaOK2PmDgN3PCVpFzio2ITgKDfH6yiWmnKnoxv8Jx8XGM-SgvG-0NZ0o1V2UIxJ4Fr2mrP48q0suSu7EleLbeFwThfNHLUVxMKjCKke288oKdvCq5sV3tVA7GxD2KUcMZOdBNJIVeu5Thmq1gt9SDyfCgpwXlAmaJEKDbvWQmoEk7sww',
          imageAlt: 'Abridor sacacorchos profesional'
        }
      ]
    }
  ];

  currentStep = computed(() => {
    return this.steps.find(s => s.id === this.currentStepId()) || this.steps[0];
  });

  ngOnInit() {
    this.title.setTitle('AnviVino - Personaliza tu Pack');
    this.meta.updateTag({ name: 'description', content: 'Crea un pack de vino personalizado para tu ocasión especial.' });
  }

  goToStep(stepId: number) {
    this.currentStepId.set(stepId);
  }

  nextStep() {
    if (this.currentStepId() < this.steps.length) {
      this.currentStepId.update(v => v + 1);
    }
  }

  prevStep() {
    if (this.currentStepId() > 1) {
      this.currentStepId.update(v => v - 1);
    }
  }

  isOptionSelected(option: PackOption): boolean {
    const key = option.category;
    return this.selection()[key]?.id === option.id;
  }

  selectOption(option: PackOption) {
    const key = option.category;
    this.selection.update(state => ({
      ...state,
      [key]: option
    }));
  }
}
