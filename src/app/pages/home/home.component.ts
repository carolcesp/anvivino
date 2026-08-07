import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HeroComponent } from './components/hero/hero.component';
import { PacksGridComponent } from './components/packs-grid/packs-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, PacksGridComponent],
  host: {
    'class': 'block max-w-container-max mx-auto w-full'
  },
  template: `
    <main>
      <app-hero></app-hero>
      <app-packs-grid></app-packs-grid>
    </main>
  `
})
export class HomeComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('AnviVino - El Arte de Regalar');
    this.meta.updateTag({ name: 'description', content: 'Descubre nuestra selección de packs diseñados para impresionar.' });
    this.meta.updateTag({ property: 'og:title', content: 'AnviVino - El Arte de Regalar' });
    this.meta.updateTag({ property: 'og:description', content: 'Descubre nuestra selección de packs diseñados para impresionar.' });
  }
}
