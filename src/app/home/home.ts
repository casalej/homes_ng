import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing-service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
      <section class="results">
        @for (housingLocation of filterdLocationList; track housingLocation.id) {
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
  filterdLocationList: Array<HousingLocation> = [];

  constructor(private cdf: ChangeDetectorRef) {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filterdLocationList = housingLocationList;
      this.cdf.detectChanges();
    });
  }

  filterResults(text: string) {
    if (!text) this.filterdLocationList == this.housingLocationList;

    this.filterdLocationList = this.housingLocationList.filter((h) => {
      return h.city.toLocaleLowerCase().includes(text.toLocaleLowerCase());
    });
  }
}
