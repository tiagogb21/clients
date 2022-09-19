import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NavbarComponent } from "./navigation/navbar.component";
import { ClientRoutes } from './pages/client/client.module';
import { ClientInfoRoutes } from './pages/client-info/client-info.module';
import { EnterpriseRoutes } from "./pages/enterprise/enterprise.module";

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    children: [
      ...ClientInfoRoutes,
      ...ClientRoutes,
      ...EnterpriseRoutes,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
