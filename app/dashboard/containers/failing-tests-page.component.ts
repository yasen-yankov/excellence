import { Component } from '@angular/core';
import { Test } from './../models/test';
import { TestResult } from './../models/test-result';

@Component({
  moduleId: module.id,
  selector: 'failing-tests-page',
  template: `
    <h1 class="page-header"><i class="fa fa-window-close" aria-hidden="true"></i> Failing tests</h1>
    <form>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Search" />
        </div>
    </form>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Test name</th>
                        <th>State</th>
                        <th>Start Date</th>
                        <th>End date</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let testResult of testResults">
                        <td>
                            {{testResult.test.name}}
                        </td>
                        <td>
                            {{testResult.hasPassed}}
                        </td>
                        <td>
                            {{testResult.startDate}}
                        </td>
                        <td>
                            {{testResult.endDate}}
                        </td>
                    </tr>        
                </tbody>
            </table>
        </div>
    </div>
  `
})
export class FailingTestsPageComponent {
    testResults: TestResult[] = [
        {
            id: "test",
            test: {
                id: "test", 
                name: "IsMatch_SettingsAreNull_ReturnsFalse",
                testListId: "test"
            },
            hasPassed: true,
            startDate: new Date("1968-11-16T00:00:00"),
            endDate: new Date("1968-11-16T00:00:00"),
            testListResultId: ""
        },
        {
            id: "test",
            test: {
                id: "test", 
                name: "IsIpCorrectlyResolved",
                testListId: "test"
            },
            hasPassed: true,
            startDate: new Date("1968-11-16T00:00:00"),
            endDate: new Date("1968-11-16T00:00:00"),
            testListResultId: ""
        },
        {
            id: "test",
            test: {
                id: "test", 
                name: "Test",
                testListId: "test"
            },
            hasPassed: true,
            startDate: new Date("1968-11-16T00:00:00"),
            endDate: new Date("1968-11-16T00:00:00"),
            testListResultId: ""
        }
    ];
}