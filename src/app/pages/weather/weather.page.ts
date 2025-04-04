import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone:false
})
export class WeatherPage {

  countryName: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    if (this.countryName) {
      this.router.navigate(['/weather', this.countryName]);
      this.countryName = '';
    }
  }

}
