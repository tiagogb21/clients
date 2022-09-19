import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import { InputSearchModule } from '../../components/input-search/input-search.module';
import { TotalInfoModule } from 'src/app/components/total-info/total-info.module';

export const ClientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent
  }
];

@NgModule({
  declarations: [ClientComponent],

  providers: [ClientService],

  imports: [
    CommonModule,
    InputSearchModule,
    TotalInfoModule,
    RouterModule,
  ],
})

export class ClientModule {}
