import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GenLocationComponent } from './gen-location/gen-location.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GenLocationComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
