import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'status-page',
  template: `
    <div class="row">
        <div class="col-md-4">
            <h2 class="column-header"><i class="fa fa-check-square passing" aria-hidden="true"></i> Unit</h2>
            <status-box *ngFor="let product of products" [title]="product"></status-box>
        </div>
        <div class="col-md-4">
            <h2 class="column-header"><i class="fa fa-check-square passing" aria-hidden="true"></i> Integration</h2>
            <status-box *ngFor="let product of products" [title]="product"></status-box>
        </div>
        <div class="col-md-4">
            <h2 class="column-header"><i class="fa fa-check-square passing" aria-hidden="true"></i> UI</h2>
            <status-box *ngFor="let product of products" [title]="product"></status-box>
        </div>
    </div>
  `
})
export class StatusPageComponent {
    products: string[] = ["Sitefinity On-premises", "Feather", "DEC", "Sitefinity in DigitalFactory"];
}