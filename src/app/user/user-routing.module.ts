import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckLocationComponent } from './check-location/check-location.component';

const routes: Routes = [
  {
    path: '',
    component: CheckLocationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
