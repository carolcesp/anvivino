import { CustomizationStep } from '../models/pack-customization.model';

export const PACK_STEPS_CONFIG: CustomizationStep[] = [
  {
    id: 1,
    key: 'vino',
    label: '1. Vino',
    title: 'Selecciona el vino protagonista',

    options: [
      {
        id: 'v-1',
        name: 'Tinto Reserva',
        category: 'vino',
        description: 'Notas profundas y elegantes',
        image: {
          url: 'assets/images/vinos/vino-tinto.JPG',
          alt: 'Botella de vino tinto reserva'
        }
      },
      {
        id: 'v-2',
        name: 'Blanco Fresco',
        category: 'vino',
        description: 'Aromas cítricos y florales',
        image: {
          url: 'assets/images/vinos/vino-blanco.jpg',
          alt: 'Botella de vino blanco fresco'
        }
      },
      {
        id: 'v-3',
        name: 'Azul (Preguntar disponibilidad)',
        category: 'vino',
        description: 'Frutado y refrescante',
        image: {
          url: 'assets/images/vinos/vino-azul.JPG',
          alt: 'Botella de vino azul'
        }
      },
      {
        id: 'v-4',
        name: 'Rosado',
        category: 'vino',
        description: 'Frutado y refrescante',
        image: {
          url: 'assets/images/vinos/vino-rosado.png',
          alt: 'Botella de vino rosado'
        }
      },
      {
        id: 'v-5',
        name: 'Otros',
        category: 'vino',
        description: 'Preguntar más opciones'
      }
    ]
  },
  {
    id: 2,
    key: 'copas',
    label: '2. Copas',
    title: 'Añade la copa perfecta',

    options: [
      {
        id: 'cp-1',
        name: 'Set 2 Copas (Negra y Blanca)',
        category: 'copas',
        description: 'Copas de plástico de alta resistencia',
        image: {
          url: 'assets/images/copas/copas_todas.jpg',
          alt: 'Set de copas negra y blanca'
        }
      },
      {
        id: 'cp-2',
        name: 'Set 2 Copas (Rosa y Negra)',
        category: 'copas',
        description: 'Copas de plástico de alta resistencia',
        image: {
          url: 'assets/images/copas/copas_rosa_negra.jpg',
          alt: 'Set de copas rosa y negra'
        }
      },
      {
        id: 'cp-3',
        name: 'Set 2 Copas (Rosa y Blanca)',
        category: 'copas',
        description: 'Copas de plástico de alta resistencia',
        image: {
          url: 'assets/images/copas/copas_rosa_blanca.jpg',
          alt: 'Set de copas rosa y blanca'
        }
      },
      {
        id: 'cp-4',
        name: 'Set 2 Copas (Negras)',
        category: 'copas',
        description: 'Copas de plástico de alta resistencia'
      },
      {
        id: 'cp-5',
        name: 'Set 2 Copas (Blancas)',
        category: 'copas',
        description: 'Copas de plástico de alta resistencia'
      },
      {
        id: 'cp-6',
        name: 'Set 2 Copas (Rosas)',
        category: 'copas',
        description: 'Copas de plástico de alta resistencia'
      }
    ]

  },
  {
    id: 3,
    key: 'bolsa',
    label: '3. Bolsa',
    title: 'Elige el estilo de presentación',

    options: [
      {
        id: 'b-1',
        name: 'Bolsa Negra Mini',
        category: 'bolsa',
        description: 'Las letras y el color son personalizables',
        image: {
          url: 'assets/images/bolsas/bolsa_negra_mini.jpg',
          alt: 'Bolsa de regalo negra mini'
        }
      },
      {
        id: 'b-2',
        name: 'Bolsa Blanca mini',
        category: 'bolsa',
        description: 'Las letras y el color son personalizables',
        image: {
          url: 'assets/images/bolsas/bolsa_blanca_mini.jpg',
          alt: 'Bolsa de regalo pequeña'
        }
      },
      {
        id: 'b-3',
        name: 'Bolsa Negra Grande',
        category: 'bolsa',
        description: 'Las letras y el color son personalizables',
        image: {
          url: 'assets/images/bolsas/bolsas_collage.jpg',
          alt: 'Bolsa de regalo negra grande'
        }
      },
      {
        id: 'b-4',
        name: 'Bolsa Blanca Grande',
        category: 'bolsa',
        description: 'Las letras y el color son personalizables',
        image: {
          url: 'assets/images/bolsas/bolsa_grande.jpg',
          alt: 'Bolsa de regalo pequeña'
        }
      },
      {
        id: 'b-5',
        name: 'Bolsa Rosa Grande',
        category: 'bolsa',
        description: 'Las letras y el color son personalizables',
        image: {
          url: 'assets/images/bolsas/bolsa_rosa_grande.jpg',
          alt: 'Bolsa de regalo rosa grande'
        }
      }
    ]

  },

  {
    id: 4,
    key: 'chocolates',
    label: '4. Chocolates',
    title: 'Elige los chocolates de maridaje',

    options: [
      {
        id: 'c-1',
        name: 'Kitkat',
        category: 'chocolates',
        image: {
          url: 'assets/images/extras/chocolates.jpg',
          alt: 'Chocolate Kitkat'
        }
      },
      {
        id: 'c-2',
        name: 'Huesitos',
        category: 'chocolates',
        image: {
          url: 'assets/images/extras/chocolates.jpg',
          alt: 'Chocolate Huesitos'
        }
      },
      {
        id: 'c-3',
        name: 'Otros',
        category: 'chocolates',
        image: {
          url: 'assets/images/extras/chocolates.jpg',
          alt: 'Otros chocolates'
        }
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
        name: 'Velas led rojas',
        category: 'extras',
        image: {
          url: 'assets/images/extras/velas_rojas.jpeg',
          alt: 'Velas led rojas'
        }
      },
      {
        id: 'e-2',
        name: 'Velas led azul',
        category: 'extras',
        image: {
          url: 'assets/images/extras/velas_azul.jpeg',
          alt: 'Velas led azul y blancas'
        }
      },
      {
        id: 'e-3',
        name: 'Soporte love rojo',
        category: 'extras',
        image: {
          url: 'assets/images/extras/soporte_love.jpeg',
          alt: 'Soporte para copas romántico'
        }
      },
      {
        id: 'e-4',
        name: 'Soporte beige',
        category: 'extras',
        image: {
          url: 'assets/images/extras/soporte_white.jpeg',
          alt: 'Soporte para copas beige'
        }
      },
      {
        id: 'e-5',
        name: 'Pétalos azules',
        category: 'extras',
        image: {
          url: 'assets/images/extras/petalos_azules.JPG',
          alt: 'Pétalos azules'
        }
      },
      {
        id: 'e-6',
        name: 'Pétalos rojos',
        category: 'extras',
        image: {
          url: 'assets/images/extras/petalos_rojos.JPG',
          alt: 'Pétalos rojos'
        }
      },
      {
        id: 'e-7',
        name: 'Pétalos azul y blanco',
        category: 'extras',
        image: {
          url: 'assets/images/extras/petalos_azul_blanco.jpeg',
          alt: 'Pétalos azul y blanco'
        }
      },
      {
        id: 'e-8',
        name: 'Forro botella Navidad',
        category: 'extras',
        image: {
          url: 'assets/images/extras/pack_navidad.jpg',
          alt: 'Forro de botella de Navidad'
        }
      },
      {
        id: 'e-9',
        name: 'Bufanda Papá Noel',
        category: 'extras',
        image: {
          url: 'assets/images/extras/bufanda_navidad.jpeg',
          alt: 'Bufanda de Papá Noel para botella'
        }
      },
      {
        id: 'e-10',
        name: 'Gorro de botella Papá Noel',
        category: 'extras',
        image: {
          url: 'assets/images/extras/gorro_navidad.jpeg',
          alt: 'Gorro de botella de Papá Noel'
        }
      },
      {
        id: 'e-11',
        name: 'Soporte copas especial Navidad',
        category: 'extras',
        image: {
          url: 'assets/images/extras/pack_navidad.jpg',
          alt: 'Soporte especial para copas de Navidad'
        }
      }
    ]

  }
];