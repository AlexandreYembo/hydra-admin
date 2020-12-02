import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate:[ AuthGuard ] },
  // { path: 'catalog', loadChildren: './catalog/catalog.module#CatalogModule' }
  { path: 'catalog', 
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule) }, //this is better one
    { path: 'login', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }

];
// loadChildren only load this module when someone use this path --> enable lazy load
// loadChildren(path#NameOftheClass)

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})], //preloadingStrategy used for lazy loading is optimized
  exports: [RouterModule]
})
export class AppRoutingModule { }