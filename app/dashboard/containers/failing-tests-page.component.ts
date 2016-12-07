import { Component } from '@angular/core';
import { Test } from './../models/test';

@Component({
  moduleId: module.id,
  selector: 'failing-tests-page',
  template: `
    <table class="table">
        <thead>
            <tr>
                <th>Test name<th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let testResult of testResults">
                <td>
                    {{testResult.name}}
                </td>
            </tr>        
        </tbody>
    </table>
  `
})
export class FailingTestsPageComponent {
    testResults: Test[] = [
        {
            id: "test", 
            name: "Test",
            testListId: "test"
        },
        {
            id: "test2", 
            name: "Test2",
            testListId: "test2"
        }
    ];
}