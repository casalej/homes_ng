import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  template: ` <p>details works! {{ housingLocationId }}</p> `,
  styleUrl: './details.css',
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: number = 0;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
}
