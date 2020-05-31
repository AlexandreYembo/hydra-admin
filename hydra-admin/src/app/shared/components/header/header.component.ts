import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()totalQty: number = 0;
  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.totalQty);
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