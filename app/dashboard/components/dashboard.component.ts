import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Release } from './../release';
import { ReleaseService } from './../services/release.service';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  releases: Release[] = [];
  selectedRelease: Release;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private releaseService: ReleaseService
    ) { }

  ngOnInit(): void {
    let selectedReleaseId: string;

    this.releaseService.getReleases()
      .then(releases => this.releases = releases)
      .then(releases => this.selectedRelease = this.releases.find(release => release.id === selectedReleaseId));

    this.sub = this.route.params.subscribe(params => {
      selectedReleaseId = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}