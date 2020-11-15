import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBoxComponent } from './input-box/input-box.component';

@NgModule({
  declarations: [InputBoxComponent],
  imports: [CommonModule],
  exports: [InputBoxComponent],
})
export class SharedModule {}
