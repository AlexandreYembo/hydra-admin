import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'hydraAdmin';
  siderBarOpen = true;

  userSub: Subscription;
  isLogged = false;
  @Output() email = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user =>{
      this.isLogged = !!user;
debugger;
      if(this.isLogged){
        this.email = user.email;
      }
    })
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  siderbarToggler(){
    this.siderBarOpen = !this.siderBarOpen;
  }
}
