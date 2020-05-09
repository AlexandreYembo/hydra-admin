import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hydraAdmin';
  siderBarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  siderbarToggler(){
    this.siderBarOpen = !this.siderBarOpen;
  }
}
