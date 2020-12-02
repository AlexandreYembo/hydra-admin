import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../auth/auth.guard';
import { CatalogEditComponent } from './catalog-edit/catalog-edit.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';

   const routes: Routes = [
    {
        path: '',
        children:[
            { path:'', component: CatalogListComponent, canActivate:[ AuthGuard ] },
            { path:'new', component: CatalogEditComponent, canActivate:[ AuthGuard ]  }
        ]
    }];

    @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
    export class CatalogRoutingModule{
        
    }