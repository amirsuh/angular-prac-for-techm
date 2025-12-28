export interface KiranaBucketModel {
  id: number;
  name: string;
  category: GroceryCategory;
  price: number;        // price per unit
  unit: GroceryUnit;    // kg, liter, piece, packet
  stock: number;        // available quantity
  brand?: string;
  isAvailable: boolean;
  quantity:any
}

export type GroceryCategory =
  | 'Rice & Grains'
  | 'Pulses'
  | 'Spices'
  | 'Oil & Ghee'
  | 'Dairy'
  | 'Vegetables'
  | 'Fruits'
  | 'Snacks';

export type GroceryUnit =
  | 'kg'
  | 'liter'
  | 'piece'
  | 'packet';
