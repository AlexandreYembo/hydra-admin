import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()totalQty: number = 0;
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();

  name: string;
  isAuthenticated: boolean;
  subscription:Subscription;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.authNavStatus$.subscribe(status => this.isAuthenticated = status);
    this.name = this.authService.name;
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  async signout() {
    await this.authService.signout();     
  }

  toggleSidebar(){
    this.toggleSidebarEvent.emit();
  }

  updateTotalBasket(total: number){
    this.totalQty = total;
  }

  //Avoid close the menu
  freezeItem($event:any){
    $event.stopPropagation();
    //Another instructions
}
}