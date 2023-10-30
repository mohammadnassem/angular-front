import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PublicHealthComponent} from "./components/public-health/public-health.component";
import {LoginComponent} from "./components/login/login.component";
import {OverviewComponent} from "./components/overview/overview.component";
import {AboutComponent} from "./components/health-insurance/about/about.component";
import {AboutComponent as AboutTourism} from "./components/health-tourism/about/about.component";
import {
  GovernmentInsuranceComponent
} from "./components/health-insurance/government-insurance/government-insurance.component";
import {SpecialProgramComponent} from "./components/health-insurance/special-program/special-program.component";
import {PermitServicesComponent} from "./components/health-insurance/permit-services/permit-services.component";
import {CovidComponent} from './components/health-public/covid/covid.component';
import {OccupationalComponent} from './components/health-public/occupational/occupational.component';
import {MedicalComponent} from "./components/health-tourism/medical/medical.component";
import {WellnessComponent} from "./components/health-tourism/wellness/wellness.component";
import {InvestingComponent} from "./components/health-tourism/investing/investing.component";
import {ProfessionalComponent} from "./components/dashboard/professional/professional.component";
import {FacilityComponent} from "./components/dashboard/facility/facility.component";
import {ProfileSpecialitiesComponent} from "./components/dashboard/profile-specialities/profile-specialities.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'public', component: PublicHealthComponent},
  {path: 'login', component: LoginComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'about-health-insurance', component: AboutComponent},
  {path: 'government-insurance', component: GovernmentInsuranceComponent},
  {path: 'special-program', component: SpecialProgramComponent},
  {path: 'permit-services', component: PermitServicesComponent},
  {path: 'occupational', component: OccupationalComponent},
  {path: 'covid', component: CovidComponent},
  {path: 'about-tourism', component: AboutTourism},
  {path: 'medical-tourism', component: MedicalComponent},
  {path: 'wellness-tourism', component: WellnessComponent},
  {path: 'Investing', component: InvestingComponent},
  {path: 'professional', component: ProfessionalComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'profile-specialities', component: ProfileSpecialitiesComponent},
  {path: '**', redirectTo: ''}
  // { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
