import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input-search.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputSearchComponent,
  ],
})

export class InputSearchModule {}
