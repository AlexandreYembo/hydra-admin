import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CatalogListComponent } from './modules/catalog/catalog-list/catalog-list.component';
import { CatalogEditComponent } from './modules/catalog/catalog-edit/catalog-edit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'catalog', component: CatalogListComponent,
      children:[
        { path:'new', component: CatalogListComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
