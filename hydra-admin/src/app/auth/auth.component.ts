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
        if(!this.loginFormValidation()) return;

        this.isLoading = true;
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;
        this.authObservable = this.authService.login(email, password);
        this.getResponse();
    }

    loginFormValidation() : boolean{
        if(this.loginForm.valid) return true;
        
        var msg = new Array();

        if(this.getFormError(this.loginForm, 'email', 'required'))
            msg.push("Email is required!")

        if(this.getFormError(this.loginForm, 'password', 'required'))
            msg.push("Password is required!")

        this.snackBar.open(msg.join('\n'),'', 
            {
                duration: 8000,
                // panelClass: 'success-snackbar'
            });

        return false;
    }

    

    onRegister(){
        if(!this.registerForm.valid) return;

        this.isLoading = true;
        const email = this.registerForm.value.email;
        const password = this.registerForm.value.password;
        const passwordConfirmation = this.registerForm.value.passwordConfirmation;
        const name = this.registerForm.value.name;
        const identityNumber = this.registerForm.value.identityNumber;
        this.authObservable = this.authService.register(email, password, passwordConfirmation, identityNumber, name);
        this.getResponse();
    }

    createLoginForm(){
        this.loginForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required)
        })
    }

    createRegisterForm(){
        this.registerForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required),
            'passwordConfirmation': new FormControl(null, Validators.required),
            'name': new FormControl(null, Validators.required),
            'identityNumber': new FormControl(null, Validators.required)
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

    getFormError(form, control, type) {
        return form.get(control).errors[type];
    }
}