import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();
  @Input() email: string;

  constructor(private authService: AuthService) { }
  
  toggleSidebar(){
    this.toggleSidebarEvent.emit();
  }
  onLogout(){
    this.authService.logout();
  }
}