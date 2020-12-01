import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { CatalogEditComponent } from './catalog/catalog-edit/catalog-edit.component';
import { CatalogListComponent } from './catalog/catalog-list/catalog-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate:[ AuthGuard ] },
  { path: 'catalog',
      children:[
        { path:'', component: CatalogListComponent, canActivate:[ AuthGuard ] },
        { path:'new', component: CatalogEditComponent, canActivate:[ AuthGuard ]  }
      ]
  },
  {path: 'login', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
