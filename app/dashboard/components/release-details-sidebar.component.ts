import { Component, Input } from '@angular/core';
import { Release } from './../models/release';

@Component({
  moduleId: module.id,
  selector: 'release-details-sidebar',
  template: `
    <div *ngIf="release" class="sidebar">
      <h1>
          Sitefinity {{release.name}}
          <br/>
          <small class="passing"><i class="fa fa-check-square fa-fw" aria-hidden="true"></i> Passing</small>
      </h1>
      <select>
        <option value="Code Base">Code Base</option>
        <option value="Team 1">Team 1 Branches</option>
        <option value="Team 2">Team 2 Branches</option>
        <option value="Team 3">Team 3 Branches</option>
        <option value="Team 4">Team 4 Branches</option>
        <option value="Team 6">Team 6 Branches</option>
        <option value="Team 7">Team 7 Branches</option>
        <option value="Team 8">Team 8 Branches</option>
      </select>
      <div class="section">
        <ul>
            <li class="active"><a [routerLink]="['status']"><i class="fa fa-heartbeat fa-fw" aria-hidden="true"></i> Status</a></li>
            <li><a [routerLink]="['failing-tests']"><i class="fa fa-window-close fa-fw" aria-hidden="true"></i> Failing tests</a></li>
            <li><a href="#"><i class="fa fa-area-chart fa-fw" aria-hidden="true"></i> Unstable tests</a></li>
            <li><a href="#"><i class="fa fa-star fa-fw" aria-hidden="true"></i> Test ratings</a></li>
        </ul>
      </div>
      <div class="section">
        <h2>Filter by</h2>
        <label>Areas per team</label>
        <select>
          <option value="All">All</option>
          <option value="Team 1">Team 1</option>
          <option value="Team 2">Team 2</option>
          <option value="Team 3">Team 3</option>
          <option value="Team 4">Team 4</option>
          <option value="Team 6">Team 6</option>
          <option value="Team 7">Team 7</option>
          <option value="Team 8">Team 8</option>
        </select>
      </div>
    </div>
  `
})
export class ReleaseDetailsSidebarComponent {
  @Input() release: Release;
}