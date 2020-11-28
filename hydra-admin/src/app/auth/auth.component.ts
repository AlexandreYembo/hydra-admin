import { Component, OnInit } from'@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotifierService } from '../shared/components/notifier/notifier.service';
import { AuthResponse } from './auth.reponse';
import { AuthService } from './auth.service';

@Component({
    selector : 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
    constructor(private authService: AuthService, 
                private router: Router,
                private notifier: NotifierService){ }

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

    onRegister(){
        if(!this.registerFormValidation()) return;

        this.isLoading = true;
        const email = this.registerForm.value.email;
        const password = this.registerForm.value.password;
        const passwordConfirmation = this.registerForm.value.passwordConfirmation;
        const name = this.registerForm.value.name;
        const identityNumber = this.registerForm.value.identityNumber;
        this.authObservable = this.authService.register(email, password, passwordConfirmation, identityNumber, name);
        this.getResponse();
    }

    loginFormValidation() : boolean {
        if(this.loginForm.valid) return true;
        
        var msg = new Array();

        if(this.getFormError(this.loginForm, 'email', 'required'))
            msg.push("Email is required!")

        if(this.getFormError(this.loginForm, 'password', 'required'))
            msg.push("Password is required!")
        
        this.notifier.notify(msg, 'Ok', 'Error');
        return false;
    }

    registerFormValidation(): boolean {
        if(this.registerForm.valid) return true;
        
        var msg = new Array();

        if(this.getFormError(this.registerForm, 'email', 'required'))
            msg.push("Email is required!")

        if(this.getFormError(this.registerForm, 'password', 'required'))
            msg.push("Password is required!")

        if(this.getFormError(this.registerForm, 'passwordConfirmation', 'required'))
            msg.push("Email is required!")

        if(this.getFormError(this.registerForm, 'name', 'required'))
            msg.push("Password is required!")

        if(this.getFormError(this.registerForm, 'identityNumber', 'required'))
            msg.push("Email is required!")
        
        this.notifier.notify(msg, 'Ok', 'Error');
        return false;
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
                this.notifier.notify(error, 'Ok', 'Error');
            });
    }

    getFormError(form, control, type) {
        return form.get(control).errors && form.get(control).errors[type];
    }
}