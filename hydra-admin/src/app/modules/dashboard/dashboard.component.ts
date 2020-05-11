import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  testRoute(){
    this.router.navigate(['new'], {relativeTo: this.activatedRoute})
  }

}
