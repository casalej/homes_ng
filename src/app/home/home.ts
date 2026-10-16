import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing-service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
      <section class="results">
        @for (housingLocation of housingLocationList; track housingLocation) {
          <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
        }
      </section>
    </section>
  `,
  styleUrl: './home.css',
})
export class Home {
  housingLocationList: Array<HousingLocation> = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
