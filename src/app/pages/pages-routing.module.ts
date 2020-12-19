import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: ProgressComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'grafica1', component: Grafica1Component},
      { path: 'account-setting', component: AccountSettingComponent},

    ]
  },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
