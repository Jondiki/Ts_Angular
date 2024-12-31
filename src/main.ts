import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'; // update Us-Fr

registerLocaleData(fr.default); //update Us-Fr
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
