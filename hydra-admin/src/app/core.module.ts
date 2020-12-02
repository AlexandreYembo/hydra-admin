import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthHttpInterceptorService } from './auth/auth-http-interceptor.service';
import { CatalogService } from './catalog/catalog.service';

@NgModule({
    providers: [
        CatalogService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService, multi: true},
        CookieService]
})
export class CoreModule{}