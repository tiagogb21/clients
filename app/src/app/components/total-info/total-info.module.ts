import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalInfoComponent } from 'src/app/components/total-info/total-info.component';

@NgModule({
  declarations: [TotalInfoComponent],
  exports: [TotalInfoComponent],
  imports: [CommonModule],
})

export class TotalInfoModule { }
