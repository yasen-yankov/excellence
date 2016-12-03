import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'release-status',
  templateUrl: 'release-status.component.html'
})
export class ReleaseStatusComponent {
    release: string = "Sitefinity 10.0";
    products: string[] = ["Sitefinity", "Feather", "DEC"];
}