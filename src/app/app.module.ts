import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeIn from '@angular/common/locales/en-IN';
registerLocaleData(localeIn); 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperSimpleComponent } from './super-simple/super-simple.component';
import { BusinessWithOpenComponent } from './business-with-open/business-with-open.component';
import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component';
import { FeaturesComponent } from './features/features.component';





@NgModule({
  declarations: [
    AppComponent,
    SuperSimpleComponent,
    BusinessWithOpenComponent,
    EligibilityCalculatorComponent,
    FeaturesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
