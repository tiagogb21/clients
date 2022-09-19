import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ClientInfoComponent } from './client-info.component';
import { ClientService } from 'src/app/services/client.service';
import { TotalInfoModule } from 'src/app/components/total-info/total-info.module';
import { InputSearchModule } from 'src/app/components/input-search/input-search.module';

export const ClientInfoRoutes: Routes = [
  {
    path: 'client/:id',
    component: ClientInfoComponent
  }
];

@NgModule({
  declarations: [ClientInfoComponent],

  providers: [ClientService],

  imports: [
    CommonModule,
    TotalInfoModule,
    InputSearchModule,
  ],
})

export class ClientInfoModule { }
