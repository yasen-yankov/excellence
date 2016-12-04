import { TestList } from './test-list';
import { TestResult } from './test-result';

export class TestListResult {
  id: string;
  testList: TestList;
  hasPassed: boolean;
  startDate: Date;
  endDate: Date;
  testResults: TestResult[];
}