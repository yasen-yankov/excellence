import { TestList } from './test-list';
import { TestResult } from './test-result';

export class TestListResult {
  id: string;
  testListId: string;
  hasPassed: boolean;
  startDate: Date;
  endDate: Date;
}