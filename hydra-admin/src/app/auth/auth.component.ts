import { Component, OnInit } from'@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth.reponse';
import { AuthService } from './auth.service';

@Component({
    selector : 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
    constructor(private authService: AuthService, 
                private snackBar: MatSnackBar, 
                private router: Router){ }

    ngOnInit() {
       this.createLoginForm();
       this.createRegisterForm();
    } 
    loginForm: FormGroup;
    registerForm: FormGroup;
    isLoading = false;
    authObservable: Observable<AuthResponse>;

    onLogin(){
        if(!this.loginForm.valid) return;

        this.isLoading = true;
        const email = this.loginForm.value.username;
        const password = this.loginForm.value.password;
        this.authObservable = this.authService.login(email, password);
        this.getResponse();
    }

    onRegister(){
        if(!this.registerForm.valid) return;
        this.isLoading = true;
        const email = this.registerForm.value.username;
        const password = this.registerForm.value.password;
        this.authObservable = this.authService.register(email, password);
        this.getResponse();
    }

    createLoginForm(){
        this.loginForm = new FormGroup({
            'username': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required)
        })
    }

    createRegisterForm(){
        this.registerForm = new FormGroup({
            'username': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required)
        })
    }

    getResponse(){
        this.authObservable.subscribe( 
            result => {
                this.isLoading = false;
                this.router.navigate(['/']);
            },
            error => {
                this.isLoading = false;
                this.snackBar.open(error,'',{duration:8000});
            });
    }
}