import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WeatherPageRoutingModule } from './weather-routing.module';
import { WeatherPage } from './weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherPageRoutingModule
  ],
  declarations: [WeatherPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class WeatherPageModule {}