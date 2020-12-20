import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services/base-service';
import { catchError, tap } from 'rxjs/operators'
import { BehaviorSubject, throwError } from 'rxjs';
import { AuthResponse } from './auth.reponse';
import { User } from './user.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})
export class AuthService extends BaseService {
    user = new BehaviorSubject<User>(null);
    private expirationTimer: any;
    
    constructor(public http: HttpClient,
        private route: Router,
        private cookieService: CookieService){
        super(http, 'identity');
    }
    login(email: string, password: string){
        return this.post<AuthResponse>("login", {
            email: email,
            password: password
        }).pipe(catchError(this.handleError), tap(this.handleAuthentication.bind(this)));
    }

    //get the user from the cookie
    autoLogin() {
        var userCookie = this.cookieService.get('userData');

        if(!userCookie) return;
        
        const userData : {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
            
        } = JSON.parse(userCookie);

        if(!userData)return;

        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate))

        if(loadedUser.token){
            this.user.next(loadedUser);

            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
           this.autoLogout(expirationDuration);
        }
    }

    //invalidate the token if the token expires
    autoLogout(expirationDuration: number){
        this.expirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration)
    }
 
    register(email: string, 
            password: string, 
            passwordConfirmation: string, 
            identityNumber: string, 
            name: string){
        return this.post<AuthResponse>("createUser", {
            email,
            password,
            passwordConfirmation,
            identityNumber,
            name
        }).pipe(catchError(this.handleError), tap(this.handleAuthentication.bind(this)));
    }

    logout(){
        this.user.next(null);
        this.route.navigate(['/']);
        this.cookieService.delete('userData');

        if(this.expirationTimer){
            clearTimeout(this.expirationTimer);
        }

        this.expirationTimer = null;
    }
    
    private handleAuthentication(resData: AuthResponse){
        const expirationDate = new Date(new Date().getTime() + resData.expiresIn * 1000);
        const user = new User(resData.userToken.email, 
                              resData.userToken.id,  
                              resData.accessToken, 
                              expirationDate);


        //this.autoLogout(resData.expiresIn * 1000);
        this.cookieService.set('userData', JSON.stringify(user)); //set the user in the cookie

        this.autoLogin();
        this.user.next(user); // emit to the subject

    }

    private handleError(errorRes: HttpErrorResponse){
        var error = ["An unknown error occurred!"];

        if(errorRes.error 
            && errorRes.error.errors 
            && errorRes.error.errors.Messages 
            && errorRes.error.errors.Messages.length > 0){
                error = errorRes.error.errors.Messages;
        }

        if(errorRes.error 
            && errorRes.error.errors 
            && errorRes.error.errors.Password 
            && errorRes.error.errors.Password.length > 0){
                error = errorRes.error.errors.Password;
        }

        return throwError(error);
    }
}