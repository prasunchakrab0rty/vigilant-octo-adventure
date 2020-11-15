import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenLocationComponent } from './gen-location/gen-location.component';

const routes: Routes = [
  {
    path: '',
    component: GenLocationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
