import { Test } from './test';

export class TestList {
  id: string;
  name: string;
  tests: Test[];
  subLists: TestList[];
}