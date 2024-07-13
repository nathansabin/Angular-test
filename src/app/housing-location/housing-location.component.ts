import { Component, input, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <section class=''>
      <img
        class='listing-photo'
        [src]='housinglocation.photo'
        alt='Exterior phot of {{ housinglocation.name }}'
        crossorigin
      />
      <h2 class='listing-heading'>{{ housinglocation.name }}</h2>
      <p class="listing-location">{{ housinglocation.city }}, {{ housinglocation.state }}</p>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housinglocation!: HousingLocation;
}
