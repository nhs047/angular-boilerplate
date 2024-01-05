import { NgModule } from '@angular/core';
import { AboutComponent } from './component/about.component';
import { RouterModule as RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: {
      breadcrumb: "About"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
