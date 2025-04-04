import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { WeatherResponse, WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss'],
  standalone: false
})
export class WeatherDetailsPage implements OnInit {
  countryName: string = '';
  weatherData: WeatherResponse | null = null;
  loading = true;

  constructor(private weatherService:WeatherService,private activatedRoute: ActivatedRoute,private navCtrl: NavController) { }

  ngOnInit() {
    this.countryName = this.activatedRoute.snapshot.paramMap.get('country')!;
    this.getWeatherDetails();
  }

  getWeatherDetails() {
    this.weatherService.getWeather(this.countryName).subscribe(
      (data) => {
        this.weatherData = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching weather data', error);
        this.loading = false;
      }
    );
  }

  goBack() {
    this.navCtrl.pop();
  }
}
