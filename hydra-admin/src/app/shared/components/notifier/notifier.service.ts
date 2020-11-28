import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from './notifier.component';
@Injectable({
    providedIn: 'root'
})
export class NotifierService {
    message: string;
    constructor(private snackBar: MatSnackBar){ }

    notify(messages: string[], buttonText: string, type: 'Error' | 'Success'){
        this.snackBar.openFromComponent(NotifierComponent, {
            data: {
                messages,
                buttonText,
                type
            },
            duration: 8000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: type
        });
    }
}