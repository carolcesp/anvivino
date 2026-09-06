import { CustomizationStep } from '../models/pack-customization.model';

export const PACK_STEPS_CONFIG: CustomizationStep[] = [
  {
    id: 1,
    key: 'vino',
    label: '1. Vino',
    title: 'Selecciona el vino protagonista',
    images: [
      {
        url: 'assets/images/vinos/vino-tinto.JPG',
        alt: 'Botella de vino tinto reserva'
      },
      {
        url: 'assets/images/vinos/vino-blanco.jpg',
        alt: 'Botella de vino blanco fresco'
      },
      {
        url: 'assets/images/vinos/vino-rosado.png',
        alt: 'Botella de vino rosado'
      },
      {
        url: 'assets/images/vinos/vino-azul.JPG',
        alt: 'Botella de vino rosado'
      }
    ],
    options: [
      {
        id: 'v-1',
        name: 'Tinto Reserva',
        category: 'vino',
        description: 'Notas profundas y elegantes'
      },
      {
        id: 'v-2',
        name: 'Blanco Fresco',
        category: 'vino',
        description: 'Aromas cítricos y florales'
      },
      {
        id: 'v-3',
        name: 'Azul (Preguntar disponibilidad)',
        category: 'vino',
        description: 'Frutado y refrescante'
      },
      {
        id: 'v-4',
        name: 'Rosado',
        category: 'vino',
        description: 'Frutado y refrescante'
      },
      {
        id: 'v-5',
        name: 'Champán',
        category: 'vino',
        description: 'Frutado y refrescante'
      }
    ]
  },
  {
    id: 2,
    key: 'copas',
    label: '2. Copas',
    title: 'Añade la copa perfecta',
    images: [
      {
        url: 'assets/images/copas/copas_todas.jpg',
        alt: 'Set de 2 copas de plastico'
      },
      {
        url: 'assets/images/copas/copas_rosa_negra.jpg',
        alt: 'Set de 2 copas de plastico'
      }
    ],
    options: [
      {
        id: 'cp-1',
        name: 'Set 2 Copas (Negra y Blanca)',
        category: 'copas',
        description: 'Copas de plastico de alta resistencia'
      },
      {
        id: 'cp-2',
        name: 'Set 2 Copas (Rosa y Negra)',
        category: 'copas',
        description: 'Copas de plastico de alta resistencia'
      },
      {
        id: 'cp-3',
        name: 'Set 2 Copas (Rosa y Blanca)',
        category: 'copas',
        description: 'Copas de plastico de alta resistencia'
      },
      {
        id: 'cp-4',
        name: 'Set 2 Copas (Negras)',
        category: 'copas',
        description: 'Copas de plastico de alta resistencia'
      },
      {
        id: 'cp-5',
        name: 'Set 2 Copas (Blancas)',
        category: 'copas',
        description: 'Copas de plastico de alta resistencia'
      },
      {
        id: 'cp-6',
        name: 'Set 2 Copas (Rosas)',
        category: 'copas',
        description: 'Copas de plastico de alta resistencia'
      }
    ]
  },
  {
    id: 3,
    key: 'bolsa',
    label: '3. Bolsa',
    title: 'Elige el estilo de presentación',
    images: [
      {
        url: 'assets/images/bolsas/bolsas_colores.jpg',
        alt: 'Bolsa de regalo negra mate'
      },
      {
        url: 'assets/images/bolsas/bolsas_collage.jpg',
        alt: 'Bolsa de regalo negra mate'
      },
      {
        url: 'assets/images/packs/bolsa-mini-pack.JPG',
        alt: 'Bolsa de regalo negra mate'
      }
    ],
    options: [
      {
        id: 'b-1',
        name: 'Bolsa Negra Pequeña',
        category: 'bolsa',
        description: 'Las letras y el color son personalizables'
      },
      {
        id: 'b-2',
        name: 'Bolsa Negra Grande',
        category: 'bolsa',
        description: 'Las letras y el color son personalizables'
      },
      {
        id: 'b-3',
        name: 'Bolsa Blanca Pequeña',
        category: 'bolsa',
        description: 'Las letras y el color son personalizables'
      },
      {
        id: 'b-4',
        name: 'Bolsa Blanca Grande',
        category: 'bolsa',
        description: 'Las letras y el color son personalizables'
      },
      {
        id: 'b-5',
        name: 'Bolsa Rosa Grande',
        category: 'bolsa',
        description: 'Las letras y el color son personalizables'
      }
    ]
  },
  {
    id: 4,
    key: 'chocolates',
    label: '4. Chocolates',
    title: 'Elige los chocolates de maridaje',
    images: [
      {
        url: 'assets/images/extras/chocolates.jpg',
        alt: 'Trufas de chocolate negro'
      }
    ],
    options: [
      {
        id: 'c-1',
        name: 'Kitkat',
        category: 'chocolates'
      },
      {
        id: 'c-2',
        name: 'Huesitos',
        category: 'chocolates'
      },
      {
        id: 'c-3',
        name: 'Otros',
        category: 'chocolates'
      }
    ]
  },
  {
    id: 5,
    key: 'extras',
    label: '5. Extras',
    title: 'Detalles especiales finales',
    images: [
      {
        url: 'assets/images/extras/velas_rojas.jpeg',
        alt: 'Velas led rojas'
      },
      {
        url: 'assets/images/extras/velas_azul.jpeg',
        alt: 'Velas led azul y blancas'
      },
      {
        url: 'assets/images/extras/soporte_love.jpeg',
        alt: 'Soporte para copas romantico'
      },
      {
        url: 'assets/images/extras/soporte_white.jpeg',
        alt: 'Soporte para copas blanco'
      },
      {
        url: 'assets/images/extras/petalos_azules.JPG',
        alt: 'Petalos azules'
      },
      {
        url: 'assets/images/extras/petalos_azul_blanco.jpeg',
        alt: 'Petalos azules'
      },
      {
        url: 'assets/images/extras/petalos_rojos.JPG',
        alt: 'Petalos rojos'
      },
      {
        url: 'assets/images/extras/gorro_navidad.jpeg',
        alt: 'Gorro para botella navidad'
      },
      {
        url: 'assets/images/extras/bufanda_navidad.jpeg',
        alt: 'Bufanda navidad'
      },
      {
        url: 'assets/images/extras/pack_navidad.jpg',
        alt: 'Pack navidad'
      }
    ],
    options: [
      {
        id: 'e-1',
        name: 'Velas led rojas',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-2',
        name: 'Velas led azul',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-3',
        name: 'Soporte love rojo',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-4',
        name: 'Soporte beige (tipo madera)',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-5',
        name: 'Petalos azules',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-6',
        name: 'Petalos rojos',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-7',
        name: 'Petalos azul y blanco',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-8',
        name: 'Soporte copas especial navidad',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-9',
        name: 'Forro botella navidad',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-10',
        name: 'Gorro de botella papá noel',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-11',
        name: 'Bufanda papá noel',
        category: 'extras',
        description: ''
      }
    ]
  }
];
