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
      name: "Pack 'Noche Eterna'",
      reference: 'AV-2024-NE',
      price: 125,
      description: 'La experiencia definitiva. Incluye un Reserva 2018, dos copas Riedel de cristal tallado, selección de trufas de chocolate negro y presentación en bolsa de lino premium.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHV3GcxF5jka1Yrgar_nTzXC0iwTxdERo9J2-zu8qL2hfLKpiPcZ1pbfuBdzWXF5dWK4fbLD7DEelHEz2KOk_cEjXdjRehzml6sn3UPP44DIFb0iMNEd6l5geUghmREi0ozWkvn6FGAkXmEAUAfybJ2rEMY2iS1Ls91xU1awKVgQWKPA3iRJ3I6D_jfdEgzLJKcbONmMMbGZ9xFM7OKPk994HbZ3iKv0oxzFk3VI2vBsNxuTqR5VVH2Q',
      imageAlt: 'Premium wine gift pack on marble surface',
      occasion: 'Aniversario',
      occasionColorClass: 'text-primary'
    },
    {
      id: '2',
      name: "Pack 'Luz de Alba'",
      reference: 'AV-2024-LA',
      price: 89,
      description: 'Fresco y vibrante. Albariño selección especial acompañado de un set de maridaje de quesos artesanales, presentado en estuche de madera reciclada.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKNR_mOX38D4ECi3tiiiB8AqC-V6ViO-AfEMecnRNcewNLk7dM36_uDq_67IyDzybHwYzTMPwD5kZoN1z-iqkASd9aeKs5DccL57E4kRY2TXjD4At7lac0TWbmiHy9rDNeejO-CV6GxxrH4VXDKLbiLkCJ_fkZaBsMFAJ5v9oZE-SIyJvUNV1tsIbFexMv347Qg2P_haaJVItuVTY3CY_ctts_R_fisUhxi9RggC5wXN8nJi3q1qHRPQ',
      imageAlt: 'Minimalist white wine gift set',
      occasion: 'Cumpleaños',
      occasionColorClass: 'text-secondary'
    }
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
