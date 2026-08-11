export interface StepImage {
  url: string;
  alt: string;
}

export interface PackOption {
  id: string;
  name: string;
  category: 'bolsa' | 'vino' | 'chocolates' | 'copas' | 'extras';
  description?: string;
  priceDelta?: number;
}

export interface CustomizationStep {
  id: number;
  key: 'bolsa' | 'vino' | 'chocolates' | 'copas' | 'extras';
  label: string;
  title: string;
  images: StepImage[];
  options: PackOption[];
}

export interface PackSelectionState {
  bolsa: PackOption[];
  vino: PackOption[];
  chocolates: PackOption[];
  copas: PackOption[];
  extras: PackOption[];
}
