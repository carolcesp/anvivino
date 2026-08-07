import { Component, input, computed } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PackSelectionState } from '../../models/pack-customization.model';

@Component({
  selector: 'app-pack-summary',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="sticky top-28 bg-surface-container-low rounded-[2rem] p-6 shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-outline-variant/30 flex flex-col gap-6">
      <h3 class="font-headline-md text-headline-md text-primary border-b border-outline-variant/50 pb-4">Tu Selección</h3>

      <!-- Dynamic Visual Preview Area -->
      <div class="relative w-full aspect-[4/5] bg-surface rounded-2xl overflow-hidden flex items-center justify-center p-4">
        <img 
          [ngSrc]="previewImage()"
          fill
          priority
          class="object-cover rounded-xl opacity-90 mix-blend-multiply"
          alt="Vista previa de selección de pack">
        
        <div class="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent"></div>
        <div class="absolute bottom-4 left-4 right-4 text-center text-primary font-label-sm text-label-sm tracking-widest uppercase">Vista Previa</div>
      </div>

      <!-- Summary List -->
      <ul class="flex flex-col gap-3 font-body-md text-body-md text-on-surface">
        <li class="flex justify-between items-center py-2 border-b border-outline-variant/20">
          <span class="text-on-surface-variant">Bolsa</span>
          <span class="font-semibold text-primary" [class.text-outline]="!selection().bolsa">
            {{ selection().bolsa?.name || 'Pendiente' }}
          </span>
        </li>
        <li class="flex justify-between items-center py-2 border-b border-outline-variant/20">
          <span class="text-on-surface-variant">Vino</span>
          <span class="font-semibold text-primary" [class.text-outline]="!selection().vino">
            {{ selection().vino?.name || 'Pendiente' }}
          </span>
        </li>
        <li class="flex justify-between items-center py-2 border-b border-outline-variant/20">
          <span class="text-on-surface-variant">Chocolates</span>
          <span class="font-semibold text-primary" [class.text-outline]="!selection().chocolates">
            {{ selection().chocolates?.name || 'Pendiente' }}
          </span>
        </li>
        <li class="flex justify-between items-center py-2 border-b border-outline-variant/20">
          <span class="text-on-surface-variant">Copas</span>
          <span class="font-semibold text-primary" [class.text-outline]="!selection().copas">
            {{ selection().copas?.name || 'Pendiente' }}
          </span>
        </li>
        <li class="flex justify-between items-center py-2 border-b border-outline-variant/20">
          <span class="text-on-surface-variant">Extras</span>
          <span class="font-semibold text-primary" [class.text-outline]="!selection().extras">
            {{ selection().extras?.name || 'Pendiente' }}
          </span>
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

  previewImage = computed(() => {
    const s = this.selection();
    if (s.bolsa) return s.bolsa.imageUrl;
    if (s.vino) return s.vino.imageUrl;
    return 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5ac2WtwZy91stGooCbAMMAX7dfFi8srlToHALdVAQg9CMuQnGGo0mw4YZ2vLYJpOlZ60e6PkrIOTRMiiI2oWu3jYCfYTyzVRxtBvaOFkoC_Uj2RJIZQ7H2CII1e0rYlD-FooLai_hOUEh5rjzdl0mSEHX6LlvpduPe0lKY1NE72u7sQd7z-0MUNHYt_RNy0rAss_q0LwkF7tyL_ZoG704iUjCi6zV4--DFdpDsTLYylPFgyJpJ0y69A';
  });

  whatsAppUrl = computed(() => {
    const s = this.selection();
    const parts = [
      '¡Hola! Me gustaría personalizar mi pack AnviVino con la siguiente selección:',
      `- Bolsa: ${s.bolsa?.name || 'Por definir'}`,
      `- Vino: ${s.vino?.name || 'Por definir'}`,
      `- Chocolates: ${s.chocolates?.name || 'Por definir'}`,
      `- Copas: ${s.copas?.name || 'Por definir'}`,
      `- Extras: ${s.extras?.name || 'Por definir'}`
    ];
    const message = encodeURIComponent(parts.join('\n'));
    return `https://wa.me/34600000000?text=${message}`;
  });
}
