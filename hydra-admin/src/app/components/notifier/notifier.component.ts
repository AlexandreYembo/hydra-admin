import { Component, Inject, OnInit } from "@angular/core";
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'app-notifier',
    templateUrl: './notifier.component.html',
    styleUrls: ['./notifier.component.css']
})

export class NotifierComponent implements OnInit{
   public messages: string;
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
        public snackBarRef: MatSnackBarRef<NotifierComponent>) {}
        ngOnInit(){
            this.messages = this.data.messages.join('<br>');
        }
}