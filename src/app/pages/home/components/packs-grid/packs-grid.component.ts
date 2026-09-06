import { Component, signal, computed } from '@angular/core';
import { PackCardComponent, Pack } from '../pack-card/pack-card.component';

@Component({
  selector: 'app-packs-grid',
  standalone: true,
  imports: [PackCardComponent],
  template: `
    <section class="px-margin-mobile md:px-margin-desktop py-section-gap">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <h2 class="font-headline-md text-headline-md text-on-surface mb-2">Packs Destacados</h2>
          <p class="font-body-md text-body-md text-on-surface-variant">Selecciones completas para regalar.</p>
        </div>
        
        <!-- Filters -->
        <div class="flex flex-wrap gap-2">
          @for (filter of filters(); track filter) {
            <button 
              (click)="activeFilter.set(filter)"
              class="px-4 py-2 rounded-full text-label-sm font-label-sm transition-colors border"
              [class]="activeFilter() === filter 
                ? 'bg-surface-container-high text-on-surface border-transparent' 
                : 'border-outline-variant text-on-surface-variant hover:bg-surface-container-low'">
              {{ filter }}
            </button>
          }
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        @for (pack of filteredPacks(); track pack.id) {
          @defer (on viewport) {
            <app-pack-card 
              [pack]="pack"
              (favoriteToggled)="onFavoriteToggled($event)">
            </app-pack-card>
          } @placeholder {
            <div class="h-[600px] w-full bg-surface-container-low rounded-DEFAULT animate-pulse"></div>
          }
        }
      </div>
    </section>
  `
})
export class PacksGridComponent {
  filters = signal(['Todos', 'Aniversario', 'Cumpleaños', 'Corporativo']);
  activeFilter = signal('Todos');

  packs = signal<Pack[]>([
    {
      id: '1',
      name: "Pack Aniversario",
      reference: 'AV-2024-NE',
      description: 'La experiencia definitiva. Incluye una botella de vino, dos copas personalizadas, selección de chocolates y presentación en bolsa transparente.',
      imageUrl: 'assets/images/packs/pack-aniversario.png',
      imageAlt: 'Bolsa de regalo con dos copas de vino y chocolates',
      occasion: 'Aniversario',
      occasionColorClass: 'text-primary'
    },
    {
      id: '2',
      name: "Pack Cumpleaños",
      reference: 'AV-2024-LA',
      description: 'Fresco y vibrante. Albariño selección especial acompañado de un set de maridaje de quesos artesanales, presentado en estuche de madera reciclada.',
      imageUrl: 'assets/images/packs/pack-cumple.JPG',
      imageAlt: 'Bolsa de regalo con dos copas de vino y chocolates',
      occasion: 'Cumpleaños',
      occasionColorClass: 'text-secondary'
    },
  ]);

  filteredPacks = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'Todos') {
      return this.packs();
    }
    return this.packs().filter(p => p.occasion === filter);
  });

  onFavoriteToggled(packId: string) {
    console.log('Favorite toggled for pack:', packId);
  }
}
