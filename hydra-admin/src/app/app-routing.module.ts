import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CatalogListComponent } from './modules/catalog/catalog-list/catalog-list.component';
import { CatalogEditComponent } from './modules/catalog/catalog-edit/catalog-edit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'catalog',
      children:[
        { path:'', component: CatalogListComponent },
        { path:'new', component: CatalogEditComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
