import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { BaseService } from '../shared/services/base-service';

@Injectable({providedIn: 'root'})
export class AuthService extends BaseService {
    constructor(public http: HttpClient){
        super(http, 'identity');
    }
    login(email: string, password: string){
        return this.post("login", {
            email: email,
            password: password
        });
    }   
}