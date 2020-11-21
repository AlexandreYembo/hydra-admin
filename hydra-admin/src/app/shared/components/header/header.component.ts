import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();
  @Input() email: string;

  constructor() { 
    debugger;
  }
  toggleSidebar(){
    this.toggleSidebarEvent.emit();
  }
}