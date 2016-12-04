import { Product } from './product';
import { TestResult } from './test-result';

export class TestsRun {
  id: string;
  product: Product;
  hasPassed: boolean;
  startDate: Date;
  endDate: Date;
  totalTestsCount: number;
  totalPassedTestsCount: number;
}