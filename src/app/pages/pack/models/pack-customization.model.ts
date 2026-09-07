export type PackCategory =
  | 'bolsa'
  | 'vino'
  | 'chocolates'
  | 'copas'
  | 'extras';

export interface PackImage {
  url: string;
  alt: string;
}

export interface PackOption {
  id: string;
  name: string;
  category: PackCategory;
  description?: string;
  image?: PackImage;
}

export interface CustomizationStep {
  id: number;
  key: PackCategory;
  label: string;
  title: string;
  options: PackOption[];
}

export interface PackSelectionState {
  bolsa: PackOption[];
  vino: PackOption[];
  chocolates: PackOption[];
  copas: PackOption[];
  extras: PackOption[];
}
