import { TestList } from './test-list';

export class Product {
  id: string;
  name: string;
  testList: TestList;
  subProducts: Product[];
}