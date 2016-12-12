import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'status-box',
  template: `
    <div class="status-box">
        <a href="#">
            <h4>
                <i class="fa fa-check-square passing" aria-hidden="true"></i> {{title}}
            </h4>
            <p>
                3023 Passing | 0 Failing
                <br/>
                <small>Last execution: 4 hours ago</small>
            </p>
            <div class="clearfix"></div>        
        </a>
    </div>
  `
})
export class StatusBoxComponent {
  @Input() title: string;
  @Input() passing: number;
  @Input() failing: number;
}