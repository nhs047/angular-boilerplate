import { NgModule } from '@angular/core';
import { HelpComponent } from './component/help.component';
import { RouterModule as RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
    data: {
      breadcrumb: "Help"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
