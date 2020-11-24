import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services/base-service';
import { catchError, tap } from 'rxjs/operators'
import { BehaviorSubject, throwError } from 'rxjs';
import { AuthResponse } from './auth.reponse';
import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class AuthService extends BaseService {
    user = new BehaviorSubject<User>(null);
    
    constructor(public http: HttpClient){
        super(http, 'identity');
    }
    login(email: string, password: string){
        return this.post<AuthResponse>("login", {
            email: email,
            password: password
        }).pipe(catchError(this.handleError), tap(this.handleAuthentication.bind(this)));
    }
 
    register(email: string, password: string){
        return this.post<AuthResponse>("login", {
            email: email,
            password: password
        }).pipe(catchError(this.handleError), tap(this.handleAuthentication));
    }
    
    private handleAuthentication(resData: AuthResponse){
        const expirationDate = new Date(new Date().getTime() + resData.expiresIn * 1000);
        const user = new User(resData.userToken.email, 
                              resData.userToken.id,  
                              resData.accessToken, 
                              expirationDate);

        this.user.next(user); // emit to the subject
    }

    private handleError(errorRes: HttpErrorResponse){
        var error = "An unknown error occurred!";

        if(errorRes.error 
            && errorRes.error.errors 
            && errorRes.error.errors.Messages 
            && errorRes.error.errors.Messages.length > 0){
                error = errorRes.error.errors.Messages[0];
        }

        if(errorRes.error 
            && errorRes.error.errors 
            && errorRes.error.errors.Password 
            && errorRes.error.errors.Password.length > 0){
            error = errorRes.error.errors.Password[0];
        }

        return throwError(error);
    }
}