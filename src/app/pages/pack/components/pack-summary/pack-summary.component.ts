import { Component, input, computed } from '@angular/core';
import { PackSelectionState } from '../../models/pack-customization.model';

@Component({
  selector: 'app-pack-summary',
  standalone: true,
  template: `
    <div class="sticky top-28 bg-surface-container-low rounded-[2rem] p-6 shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-outline-variant/30 flex flex-col gap-6">
      <h3 class="font-headline-md text-headline-md text-primary border-b border-outline-variant/50 pb-4">Tu Selección</h3>

      <!-- Summary List -->
      <ul class="flex flex-col gap-3 font-body-md text-body-md text-on-surface">
        <li class="flex justify-between items-start py-2 border-b border-outline-variant/20">
          <span class="text-on-surface-variant whitespace-nowrap mr-4">Bolsa</span>
          <div class="flex flex-col items-end text-right">
            @if (selection().bolsa.length > 0) {
              @for (item of selection().bolsa; track item.id) {
                <span class="font-semibold text-primary">{{ item.name }}</span>
              }
            } @else {
              <span class="font-semibold text-primary text-outline">Pendiente</span>
            }
          </div>
        </li>
        <li class="flex justify-between items-start py-2 border-b border-outline-variant/20">
          <span class="text-on-surface-variant whitespace-nowrap mr-4">Vino</span>
          <div class="flex flex-col items-end text-right">
            @if (selection().vino.length > 0) {
              @for (item of selection().vino; track item.id) {
                <span class="font-semibold text-primary">{{ item.name }}</span>
              }
            } @else {
              <span class="font-semibold text-primary text-outline">Pendiente</span>
            }
          </div>
        </li>
        <li class="flex justify-between items-start py-2 border-b border-outline-variant/20">
          <span class="text-on-surface-variant whitespace-nowrap mr-4">Chocolates</span>
          <div class="flex flex-col items-end text-right">
            @if (selection().chocolates.length > 0) {
              @for (item of selection().chocolates; track item.id) {
                <span class="font-semibold text-primary">{{ item.name }}</span>
              }
            } @else {
              <span class="font-semibold text-primary text-outline">Pendiente</span>
            }
          </div>
        </li>
        <li class="flex justify-between items-start py-2 border-b border-outline-variant/20">
          <span class="text-on-surface-variant whitespace-nowrap mr-4">Copas</span>
          <div class="flex flex-col items-end text-right">
            @if (selection().copas.length > 0) {
              @for (item of selection().copas; track item.id) {
                <span class="font-semibold text-primary">{{ item.name }}</span>
              }
            } @else {
              <span class="font-semibold text-primary text-outline">Pendiente</span>
            }
          </div>
        </li>
        <li class="flex justify-between items-start py-2 border-b border-outline-variant/20">
          <span class="text-on-surface-variant whitespace-nowrap mr-4">Extras</span>
          <div class="flex flex-col items-end text-right">
            @if (selection().extras.length > 0) {
              @for (item of selection().extras; track item.id) {
                <span class="font-semibold text-primary">{{ item.name }}</span>
              }
            } @else {
              <span class="font-semibold text-primary text-outline">Pendiente</span>
            }
          </div>
        </li>
      </ul>

      <!-- WhatsApp Button -->
      <a 
        [href]="whatsAppUrl()"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full py-4 mt-2 bg-[#25D366] text-white rounded-xl font-label-sm text-label-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-md text-center no-underline">
        <span class="material-symbols-outlined filled">chat</span>
        Contactar por WhatsApp
      </a>

      <p class="text-center font-label-sm text-label-sm text-on-surface-variant/70">
        Cierra los detalles de envío y pago de forma personalizada.
      </p>
    </div>
  `
})
export class PackSummaryComponent {
  selection = input.required<PackSelectionState>();

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
    return `https://wa.me/34600000000?text=${message}`;
  });
}
