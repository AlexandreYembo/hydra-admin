import { HttpEvent, HttpHandler, HttpInterceptor, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthHttpInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.user.pipe(
            take(1), // where will take only one value and it will unsubscribe
            exhaustMap(user => { //exhaustMap will wait for the first observable to complete, it will return another observable
                if(!user){
                    return next.handle(req) // it will send the request without token, in case for example of login request.
                }

                const modifiedReq = req.clone({
                    headers: new HttpHeaders().set('Authorization', 'Bearer ' + user.token)
                })
                return next.handle(modifiedReq);
            })
        );
    }
    
}