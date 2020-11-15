import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputBoxComponent } from './input-box/input-box.component';

@NgModule({
  declarations: [InputBoxComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputBoxComponent, FormsModule],
})
export class SharedModule {}
