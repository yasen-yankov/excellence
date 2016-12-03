import { Component, Input } from '@angular/core';
import { Release } from './../../release';

@Component({
  moduleId: module.id,
  selector: 'release-list-sidebar',
  templateUrl: 'release-list-sidebar.component.html'
})
export class ReleaseListSidebarComponent {
  @Input() releases: Release[];
  @Input() selectedRelease: Release;
}