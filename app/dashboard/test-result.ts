import { Test } from './test';

export class TestResult {
  id: string;
  test: Test;
  hasPassed: boolean;
  startDate: Date;
  endDate: Date;
}