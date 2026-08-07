export interface PackOption {
  id: string;
  name: string;
  category: 'bolsa' | 'vino' | 'chocolates' | 'copas' | 'extras';
  description?: string;
  imageUrl: string;
  imageAlt: string;
  priceDelta?: number;
}

export interface CustomizationStep {
  id: number;
  key: 'bolsa' | 'vino' | 'chocolates' | 'copas' | 'extras';
  label: string;
  title: string;
  options: PackOption[];
}

export interface PackSelectionState {
  bolsa: PackOption | null;
  vino: PackOption | null;
  chocolates: PackOption | null;
  copas: PackOption | null;
  extras: PackOption | null;
}
