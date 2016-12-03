import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'release-details-sidebar',
  templateUrl: 'release-details-sidebar.component.html'
})
export class ReleaseDetailsSidebarComponent {
  @Input() title: string;
  @Input() items: string[];
}