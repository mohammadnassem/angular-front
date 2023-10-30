import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './shared/footer/footer.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {PublicHealthComponent} from './components/public-health/public-health.component';
import {LoginComponent} from './components/login/login.component';
import {OverviewComponent} from './components/overview/overview.component';
import {AboutComponent} from './components/health-insurance/about/about.component';
import {
  GovernmentInsuranceComponent
} from './components/health-insurance/government-insurance/government-insurance.component';
import {SpecialProgramComponent} from './components/health-insurance/special-program/special-program.component';
import {PermitServicesComponent} from './components/health-insurance/permit-services/permit-services.component';
import {CovidComponent} from './components/health-public/covid/covid.component';
import {OccupationalComponent} from './components/health-public/occupational/occupational.component';
import {MedicalComponent} from './components/health-tourism/medical/medical.component';
import {WellnessComponent} from './components/health-tourism/wellness/wellness.component';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { InvestingComponent } from './components/health-tourism/investing/investing.component';
import { LeftNavComponent } from './components/dashboard/left-nav/left-nav.component';
import { SidenavComponent } from './components/dashboard/sidenav/sidenav.component';
import { BodyComponent } from './components/dashboard/body/body.component';
import { ProfessionalComponent } from './components/dashboard/professional/professional.component';
import { SublevelComponent } from './components/dashboard/sidenav/sublevel.component';
import { RightSidenavComponent } from './components/dashboard/right-sidenav/right-sidenav.component';
import {RightSublevelComponent} from "./components/dashboard/right-sidenav/right-sublevel.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { FacilityComponent } from './components/dashboard/facility/facility.component';
import { ProfileSpecialitiesComponent } from './components/dashboard/profile-specialities/profile-specialities.component';



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    PublicHealthComponent,
    LoginComponent,
    OverviewComponent,
    AboutComponent,
    GovernmentInsuranceComponent,
    SpecialProgramComponent,
    PermitServicesComponent,
    CovidComponent,
    OccupationalComponent,
    MedicalComponent,
    WellnessComponent,
    InvestingComponent,
    LeftNavComponent,
    SidenavComponent,
    BodyComponent,
    ProfessionalComponent,
    SublevelComponent,
    RightSidenavComponent,
    RightSublevelComponent,
    FacilityComponent,
    ProfileSpecialitiesComponent


  ],
    imports: [
        BrowserModule,
      NgApexchartsModule,
        HttpClientModule,
      BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,

    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
