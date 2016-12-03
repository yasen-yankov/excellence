import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'status-box',
  templateUrl: 'status-box.component.html'
})
export class StatusBoxComponent {
  @Input() title: string;
  @Input() passing: number;
  @Input() failing: number;
}