import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()totalQty: number;
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('hi');
    console.log(this.totalQty);
  }

  toggleSidebar(){
    this.toggleSidebarEvent.emit();
  }

  uppdateTotalBasket(total: number){
    this.totalQty = total;
  }
}