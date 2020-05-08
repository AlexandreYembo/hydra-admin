import { Component, OnInit, Input } from '@angular/core';
import { ActionsToolbarConfig } from './actions-toolbar-config';

@Component({
  selector: 'app-actions-toolbar',
  templateUrl: './actions-toolbar.component.html',
  styleUrls: ['./actions-toolbar.component.scss']
})
export class ActionsToolbarComponent implements OnInit {
  @Input() parameter: ActionsToolbarConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
