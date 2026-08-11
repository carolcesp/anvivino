import { CustomizationStep } from '../models/pack-customization.model';

export const PACK_STEPS_CONFIG: CustomizationStep[] = [
  {
    id: 1,
    key: 'vino',
    label: '1. Vino',
    title: 'Selecciona el vino protagonista',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAueSre43iddFzpM3vIxLDBBGODdh08c8QQOqowWqvoEdJmWvrYmzY-Zh24KcKT_KRUgLvWkZ1_PQqOkV1vRtpzIuP8WosOKovHeKE6VHH9OOzdsXY9RP_67OH2MStWa-ARnq2m8ySmRBGPjsT6lNGVAkY8bgmcOlbee7FJsMMMK3HMYEtj0t38ilNSytRWhMWr1m2EVtA6mDN4fc8sIayHICLask8PQTQwW-hpeTzIZ-vnnFXBoAXSyg',
        alt: 'Botella de vino tinto reserva'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPxuQ_WV6z9Z0-5fua7YKusVcRQR5VTzmC1JahTSa2Qd7MELYLWjSKUdi8j6Sx98On5cVsC5XNN3nXTdkYkOKW02t4-Cf0SgKqV3n5KSzt9j9kAF4DqHYijW6Gy5mspxXXafz91xtY-zq84pyXffMR474bNWBTXORoR_TmCgGzIhVD7e0kcAGcolk2J4sNwfjdMGH7WzbB3RHq7mT3czMOQ4OgI76XbzU5437Q4nEYU0gnkETEUSqwGA',
        alt: 'Botella de vino blanco fresco'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKNR_mOX38D4ECi3tiiiB8AqC-V6ViO-AfEMecnRNcewNLk7dM36_uDq_67IyDzybHwYzTMPwD5kZoN1z-iqkASd9aeKs5DccL57E4kRY2TXjD4At7lac0TWbmiHy9rDNeejO-CV6GxxrH4VXDKLbiLkCJ_fkZaBsMFAJ5v9oZE-SIyJvUNV1tsIbFexMv347Qg2P_haaJVItuVTY3CY_ctts_R_fisUhxi9RggC5wXN8nJi3q1qHRPQ',
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
        name: 'Azul',
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
        url: '/assets/images/copas_todas.jpg',
        alt: 'Set de 2 copas de plastico'
      },
      {
        url: '/assets/images/copas_rosa_negra.jpg',
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
        url: '/assets/images/bolsas_colores.jpg',
        alt: 'Bolsa de regalo negra mate'
      },
      {
        url: '/assets/images/bolsas_collage.jpg',
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
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHV3GcxF5jka1Yrgar_nTzXC0iwTxdERo9J2-zu8qL2hfLKpiPcZ1pbfuBdzWXF5dWK4fbLD7DEelHEz2KOk_cEjXdjRehzml6sn3UPP44DIFb0iMNEd6l5geUghmREi0ozWkvn6FGAkXmEAUAfybJ2rEMY2iS1Ls91xU1awKVgQWKPA3iRJ3I6D_jfdEgzLJKcbONmMMbGZ9xFM7OKPk994HbZ3iKv0oxzFk3VI2vBsNxuTqR5VVH2Q',
        alt: 'Trufas de chocolate negro'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpUBMR0FLwIFcyd25TpEYXC0xLXYwgJX2FA9OnSW0epEnbYFDbjJAG6M9aO38ptuna7V2PjWDn_BvNtug0xnKMbO-jM0bieqQDlk_I-b2k8dD1wbEjGGkKSgUGVAg6KOwPEX3mGdcDn-hFFiT3OwsvuDzig9jsYH8eMCCkdRuee1Nmwo2VB4bzYmLTPQxXsbh8VyJ6zS6GE4QXWAEFKbhbgRAB44S_6lTRTbWnrpKaFEcRSUVLFsaBYg',
        alt: 'Caja de bombones belgas'
      }
    ],
    options: [
      {
        id: 'c-1',
        name: 'Ferrero Rocher',
        category: 'chocolates',
        description: 'Caja de 8 unidades'
      },
      {
        id: 'c-2',
        name: 'Bombones Belgas',
        category: 'chocolates',
        description: 'Selección surtida de praliné'
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
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIlIevL_i5Gp6RX-9fKodfDd17p-fS12pnydEsAmlaFFDk3M01JuBwJ9oZ-RT0CJkkeg9IIv-4LswiT4b3VGxyhQ2jCvo2YC8gY0RHKUk0jk0nbAIXLaT9YBM70_DVyDhNr7_ilkCl9f8lJRfjLiJH-igEG0yBYzjUel41k0gG2Smtd5rJwg6BRQY5otFIXnbLANxfAu_orsf_raezJ6WPG-OWLVb6LHtnOT1NQFTds9VN_3Cb2Zv7Sw',
        alt: 'Tarjeta dedicatoria personalizada'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDIOwKCRG3BJgr-v-wSYrSxvgWhxNI5Ds0n-bVJSMvdTtuLeEon8jKRpuXz5dsry8tDYuNrWZaOK2PmDgN3PCVpFzio2ITgKDfH6yiWmnKnoxv8Jx8XGM-SgvG-0NZ0o1V2UIxJ4Fr2mrP48q0suSu7EleLbeFwThfNHLUVxMKjCKke288oKdvCq5sV3tVA7GxD2KUcMZOdBNJIVeu5Thmq1gt9SDyfCgpwXlAmaJEKDbvWQmoEk7sww',
        alt: 'Abridor sacacorchos profesional'
      }
    ],
    options: [
      {
        id: 'e-1',
        name: 'Soporte copas',
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
        name: 'Velas led rojas',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-4',
        name: 'Petalos azules',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-5',
        name: 'Petalos rojos',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-6',
        name: 'Petalos azul y blanco',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-10',
        name: 'Soporte copas especial navidad',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-7',
        name: 'Forro botella navidad',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-8',
        name: 'Gorro de botella papá noel',
        category: 'extras',
        description: ''
      },
      {
        id: 'e-9',
        name: 'Bufanda papá noel',
        category: 'extras',
        description: ''
      }
    ]
  }
];
