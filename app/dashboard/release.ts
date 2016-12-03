import { Product } from './product';

export class Release {
  id: string;
  name: string;
  isPassing: boolean;
  product: Product;
}