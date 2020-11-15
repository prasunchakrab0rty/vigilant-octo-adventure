import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CheckLocationComponent } from './check-location/check-location.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CheckLocationComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
