import { Component, Input } from '@angular/core';
import { Release } from './../models/release';

@Component({
  moduleId: module.id,
  selector: 'release-list-sidebar',
  template: `
    <div class="sidebar-small">
      <ul>
          <li *ngFor="let release of releases" [class.active]="selectedRelease && release.id == selectedRelease.id"><a [routerLink]="['/dashboard', release.id]"><span>{{release.name}}</span></a></li>
      </ul>
    </div>
  `
})
export class ReleaseListSidebarComponent {
  @Input() releases: Release[];
  @Input() selectedRelease: Release;
}