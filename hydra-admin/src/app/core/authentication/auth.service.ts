
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { BehaviorSubject } from 'rxjs'; 
import { BaseService } from 'src/app/shared/services/base-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService  {

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private manager = new UserManager(getClientSettings());
  private user: User | null;

  constructor(public http: HttpClient) { 
    super(http, 'identity');     
    
    this.manager.getUser().then(user => { 
      this.user = user;      
      this._authNavStatusSource.next(this.isAuthenticated());
    });
  }

  login() { 
    return this.manager.signinRedirect();   
  }

  async completeAuthentication() {
      this.user = await this.manager.signinRedirectCallback();
      this._authNavStatusSource.next(this.isAuthenticated());      
  }  

//   register(userRegistration: any) {    
//     return this.http.post(this.configService.authApiURI + '/account', userRegistration).pipe(catchError(this.handleError));
//   }

  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }

  public getUser(){
    return this.manager.getUser();
  }

  get authorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  get name(): string {
    return this.user != null ? this.user.profile.name : '';
  }

  async signout() {
    await this.manager.signoutRedirect();
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
      authority: 'http://localhost:5000',
      client_id: 'a5f46b71-fbf2-4dab-8640-e542c1b8b3bb',
      redirect_uri: 'http://localhost:4200/auth-callback',
      post_logout_redirect_uri: 'http://localhost:4200/',
      response_type:"id_token token",
      scope:"openid profile email hydra-api",
      filterProtocolClaims: true,
      loadUserInfo: true,
      automaticSilentRenew: true,
      silent_redirect_uri: 'http://localhost:4200/'
      // silent_redirect_uri: 'http://localhost:4200/silent-refresh.html'
  };
}