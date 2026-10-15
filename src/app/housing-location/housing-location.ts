import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <section class="listing">
      <img
        class="listing-phot"
        [src]="housingLocation.photo"
        alt="Exterior Photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
  `,
  styleUrl: './housing-location.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
