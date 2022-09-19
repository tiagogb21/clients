import { NgModule } from "@angular/core";

import { ClientModule } from "./client/client.module";
import { ClientInfoModule } from './client-info/client-info.module';
import { EnterpriseModule } from './enterprise/enterprise.module';

@NgModule({
  imports: [
    ClientModule,
    ClientInfoModule,
    EnterpriseModule,
  ],
})

export class PagesModule {}
