import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { InputSearchModule } from 'src/app/components/input-search/input-search.module';

export const EnterpriseRoutes: Routes = [
  {
    path: 'enterprise',
    component: EnterpriseComponent
  },
];

@NgModule({
  declarations: [EnterpriseComponent],

  providers: [EnterpriseService],

  imports: [
    CommonModule,
    InputSearchModule,
  ]
})

export class EnterpriseModule {}
